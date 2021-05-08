const express = require('express');
const router = express.Router();
const { Flight, Seat, Airplane, Airport, Company, Price, Ticket } = require('../models');
const moment = require('moment');
const paginateFlights = (array, size, page) => {
  //page counting start with 1
  return array.slice((page - 1) * size, page * size);
};

const sortFlightsBy = (array, sortBy) => {
  const format = 'YYYY-MM-DD hh:mm:ss';

  return array.sort((a, b) => {
    let aVal, bVal;

    if (sortBy === 'cheapest') {
      if (a.firstFlight) {
        aVal = a.firstFlight.get('lowestTicketPrice') + a.lastFlight.get('lowestTicketPrice');
      } else aVal = a.get('lowestTicketPrice');

      if (b.firstFlight) {
        bVal = b.firstFlight.get('lowestTicketPrice') + b.lastFlight.get('lowestTicketPrice');
      } else bVal = b.get('lowestTicketPrice');
    }

    if (sortBy === 'earliest') {
      if (a.firstFlight) {
        aVal = moment(a.firstFlight.get('departureDate'), format).format('X');
      } else aVal = moment(a.get('departureDate'), format).format('X');

      if (b.firstFlight) {
        bVal = moment(b.firstFlight.get('departureDate'), format).format('X');
      } else bVal = moment(b.get('departureDate'), format).format('X');
    }

    if (sortBy === 'fastest') {
      let aDepDate, aArrDate, bDepDate, bArrDate;

      if (a.firstFlight) {
        aDepDate = moment(a.firstFlight.get('departureDate'), format);
        aArrDate = moment(a.lastFlight.get('arrivalDate'), format);
      } else {
        aDepDate = moment(a.get('departureDate'), format);
        aArrDate = moment(a.get('arrivalDate'), format);
      }
      if (b.firstFlight) {
        bDepDate = moment(b.firstFlight.get('departureDate'), format);
        bArrDate = moment(b.lastFlight.get('arrivalDate'), format);
      } else {
        bDepDate = moment(b.get('departureDate'), format);
        bArrDate = moment(b.get('arrivalDate'), format);
      }

      aVal = aArrDate.diff(aDepDate);
      bVal = bArrDate.diff(bDepDate);
    }

    return aVal > bVal ? 1 : -1;
  });
};

const setLowestTicketPrice = (flight, classPrice) => {
  const ticketPrice = Math.round(classPrice + (flight.distance * flight.Company.rating) / 50);
  flight.setDataValue('lowestTicketPrice', ticketPrice);
};

router.get('/', async (req, res) => {
  try {
    const departureCity = req.query.departureCity;
    const arrivalCity = req.query.arrivalCity;
    const size = req.query.size;
    const page = req.query.page;
    const sortBy = req.query.sortBy;
    // const departureDate = req.query.departureDate;

    const departureAirport = await Airport.findOne({ where: { city: departureCity } });
    const arrivalAirport = await Airport.findOne({ where: { city: arrivalCity } });

    const ticketPriceByClass = await Price.findOne({ attributes: ['economy'] });

    let allToArrival = await Flight.findAll({
      attributes: ['flightNumber', 'departureDate', 'arrivalDate', 'distance'],
      include: [
        { model: Airport, as: 'departureAirport', attributes: ['city'] },
        { model: Airport, as: 'arrivalAirport', attributes: ['city'] },
        { model: Airplane, attributes: ['model'] },
        { model: Company, attributes: { exclude: ['id'] } },
      ],
      where: {
        arrivalAirportId: arrivalAirport.id,
      },
    });

    //      B
    //    /   \
    //   /     \
    //  A — — — C
    // AC - direct flight
    // fix Paris to Paris

    let BCCities = [];
    flights = [];
    let totalItems = 0;

    allToArrival.forEach((flight) => {
      setLowestTicketPrice(flight, ticketPriceByClass['economy']);
      if (flight.departureAirport.city !== departureCity) {
        BCCities.push(flight.departureAirport.city);
      } else {
        flights.push(flight); // AC
        totalItems++;
      }
    });

    uniqueBCCity = [...new Set(BCCities)];
    await Promise.all(
      uniqueBCCity.map(async (city) => {
        const cityAirport = await Airport.findOne({ where: { city: city } });

        const AB = await Flight.findAll({
          attributes: ['flightNumber', 'departureDate', 'arrivalDate', 'distance'],
          include: [
            { model: Airport, as: 'departureAirport', attributes: ['city'] },
            { model: Airport, as: 'arrivalAirport', attributes: ['city'] },
            { model: Airplane, attributes: ['model'] },
            { model: Company, attributes: { exclude: ['id'] } },
          ],
          where: {
            departureAirportId: departureAirport.id,
            arrivalAirportId: cityAirport.id,
          },
        });

        const BC = await Flight.findAll({
          attributes: ['flightNumber', 'departureDate', 'arrivalDate', 'distance'],
          include: [
            { model: Airport, as: 'departureAirport', attributes: ['city'] },
            { model: Airport, as: 'arrivalAirport', attributes: ['city'] },
            { model: Airplane, attributes: ['model'] },
            { model: Company, attributes: { exclude: ['id'] } },
          ],
          where: {
            departureAirportId: cityAirport.id,
            arrivalAirportId: arrivalAirport.id,
          },
        });

        AB.forEach((firstFlight) => {
          setLowestTicketPrice(firstFlight, ticketPriceByClass['economy']);
          BC.forEach((lastFlight) => {
            setLowestTicketPrice(lastFlight, ticketPriceByClass['economy']);
            totalItems++;
            flights.push({ firstFlight, lastFlight }); // AB + BC
          });
        });
      })
    );

    const totalPages = Math.ceil(totalItems / size);
    if (page > totalPages) {
      return res.status(500).json({
        status: 'error',
        message: 'Wrong page number',
        details: 'Page number greater than total pages',
      });
    }

    const sortedFlights = sortFlightsBy(flights, sortBy);
    const paginatedFlights = paginateFlights(sortedFlights, size, page);

    res.status(200).json({
      totalItems,
      totalPages,
      currentPage: +page,
      items: paginatedFlights,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Flights search error');
  }
});

router.get('/:flightNumber', async (req, res) => {
  try {
    const flightNumber = req.params.flightNumber;

    const flight = await Flight.findOne({
      attributes: ['flightNumber', 'departureDate', 'arrivalDate', 'distance'],
      where: { flightNumber: flightNumber },
      order: [[Airplane, Seat, 'seatNumber', 'ASC']],
      include: [
        { model: Airport, as: 'arrivalAirport', attributes: ['city', 'name'] },
        { model: Airport, as: 'departureAirport', attributes: ['city', 'name'] },
        { model: Company, attributes: { exclude: ['id'] } },
        {
          model: Airplane,
          attributes: ['model'],
          include: [{ model: Seat, attributes: { exclude: ['id', 'AirplaneId'] } }],
        },
      ],
    });

    if (flight) {
      res.status(200).json(flight);
    } else {
      res.status(200).send('Flight Not Found');
    }
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

// router.get('/ticketFlights', async (req, res) => {
//   try {
//     let flights = await Flight.findAll({
//       attributes: ['flightNumber', 'departureDate', 'arrivalDate', 'distance'],
//       include: [
//         {
//           model: Ticket,
//           through: {
//             attributes: ['price'],
//           },
//         },
//       ],
//       where: {
//         departureAirportId: 4,
//         arrivalAirportId: 7,
//       },
//     });

//     if (flights.length) {
//       res.status(200).json(flights);
//     } else {
//       res.status(404).send('Flights Not Found');
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(404).send('Flight Search Error');
//   }
// });

module.exports = router;
