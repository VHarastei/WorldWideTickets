const express = require('express');
const router = express.Router();
const { Flight, Seat, Airplane, Airport, Company, Price, Ticket } = require('../models');

const generateTickets = require('../utils/generators/ticketsGenerator');

router.get('/generateBoarding', async (req, res) => {
  try {
    const data = await generateTickets();
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const departureCity = req.query.departureCity;
    const arrivalCity = req.query.arrivalCity;
    // const departureDate = req.query.departureDate;

    const departureAirport = await Airport.findOne({ where: { city: departureCity } });
    const arrivalAirport = await Airport.findOne({ where: { city: arrivalCity } });
    const lowestTicketClassPrice = await Price.findOne({ attributes: ['economy'] });

    let allToArrival = await Flight.findAll({
      attributes: ['flightNumber', 'departureDate', 'arrivalDate', 'distance'],
      include: [
        { model: Airport, as: 'departureAirport', attributes: ['city', 'name'] },
        { model: Airport, as: 'arrivalAirport', attributes: ['city', 'name'] },
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

    let AC = [];
    let AB = [];
    let BC = [];
    let BCCities = [];

    allToArrival.forEach((flight) => {
      const ticketPrice = Math.round(
        lowestTicketClassPrice['economy'] + (flight.distance * flight.Company.rating) / 50
      );
      flight.setDataValue('lowestTicketPrice', ticketPrice);

      if (flight.departureAirport.city !== departureCity) {
        BC.push(flight); //because no need to group flights by city
        BCCities.push(flight.departureAirport.city);
      } else {
        AC.push(flight);
      }
    });
    uniqueBCCity = [...new Set(BCCities)];

    await Promise.all(
      uniqueBCCity.map(async (city) => {
        const cityAirport = await Airport.findOne({ where: { city: city } });

        let ABFlights = await Flight.findAll({
          attributes: ['flightNumber', 'departureDate', 'arrivalDate', 'distance'],
          include: [
            { model: Airport, as: 'departureAirport', attributes: ['city', 'name'] },
            { model: Airport, as: 'arrivalAirport', attributes: ['city', 'name'] },
            { model: Company, attributes: { exclude: ['id'] } },
          ],
          where: {
            departureAirportId: departureAirport.id,
            arrivalAirportId: cityAirport.id,
          },
        });
        if (ABFlights.length) {
          ABFlights.forEach((flight) => {
            const ticketPrice = Math.round(
              lowestTicketClassPrice['economy'] + (flight.distance * flight.Company.rating) / 50
            );
            flight.setDataValue('lowestTicketPrice', ticketPrice);
            AB.push(flight);
          });
        }
      })
    );

    // moved to client, because response is too big
    // const connectingFlights = [];
    // AB.forEach((flights) => {
    //   flights.forEach((firstFlight) => {
    //     BC.forEach((lastFlight) => {
    //       connectingFlights.push({ firstFlight, lastFlight });
    //     });
    //   });
    // });

    const flights = {
      directFlights: AC,
      connectingFlights: {
        firstFlights: AB,
        lastFlights: BC,
      },
    };

    res.status(200).json(flights);
  } catch (err) {
    console.log(err);
    res.status(404).send('Flights search error');
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

router.get('/ticketFlights', async (req, res) => {
  try {
    let flights = await Flight.findAll({
      attributes: ['flightNumber', 'departureDate', 'arrivalDate', 'distance'],
      include: [
        {
          model: Ticket,
          through: {
            attributes: ['price'],
          },
        },
      ],
      where: {
        departureAirportId: 4,
        arrivalAirportId: 7,
      },
    });

    if (flights.length) {
      res.status(200).json(flights);
    } else {
      res.status(404).send('Flights Not Found');
    }
  } catch (err) {
    console.log(err);
    res.status(404).send('Flight Search Error');
  }
});

module.exports = router;
