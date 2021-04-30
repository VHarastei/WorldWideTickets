const express = require('express');
const router = express.Router();
const db = require('../models');
const createTicket = require('../utils/creators/createTicket');

const getTicketPrice = async (flight, seatClass) => {
  const ticketClassPrice = await db.Price.findOne({ attributes: [seatClass] });
  const ticketPrice = Math.round(
    ticketClassPrice[seatClass] + (flight.distance * flight.Company.rating) / 30
  );
  return ticketPrice;
};

router.post('/', async (req, res) => {
  try {
    const { passengerData, flightNumber, seatData } = req.body;

    const passenger = await db.Passenger.create(passengerData);
    const flight = await db.Flight.findOne({
      attributes: ['id', 'flightNumber', 'departureDate', 'arrivalDate', 'distance'],
      where: { flightNumber: flightNumber },
      include: [
        { model: db.Airport, as: 'arrivalAirport', attributes: ['city', 'name'] },
        { model: db.Airport, as: 'departureAirport', attributes: ['city', 'name'] },
        { model: db.Company, attributes: ['rating', 'name'] },
        { model: db.Airplane, attributes: ['model'] },
      ],
    });

    const ticketPrice = await getTicketPrice(flight, seatData.seatClass);

    //if (flight) {
    const ticket = await createTicket(
      seatData.seatNumber,
      seatData.seatClass,
      ticketPrice,
      flight.id,
      passenger.id
    );

    const passengerTicket = {
      flight: {
        flightNumber: flight.flightNumber,
        departureDate: flight.departureDate,
        departureAirport: flight.departureAirport,
        arrivalAirport: flight.arrivalAirport,
        Airplane: flight.Airplane,
        Company: flight.Company,
      },
      passenger: {
        firstName: passengerData.firstName,
        lastName: passengerData.lastName,
      },
      seat: {
        seatNumber: ticket.seatNumber,
        seatClass: ticket.seatClass,
      },
      //};
    };

    // change seat status when ticket created
    res.status(201).json(passengerTicket);
  } catch (err) {
    console.log(err);
    res.status(404).send('Ticket not created');
  }
});

router.get('/price', async (req, res) => {
  try {
    const flightNumber = req.query.flightNumber;
    const seatClass = req.query.seatClass;

    const flight = await db.Flight.findOne({
      attributes: ['distance'],
      where: { flightNumber: flightNumber },
      include: [{ model: db.Company, attributes: ['rating'] }],
    });

    const ticketPrice = await getTicketPrice(flight, seatClass);

    res.status(200).json(ticketPrice);
  } catch (err) {
    console.log(err);
    res.status(404).send('Price not found');
  }
});

module.exports = router;
