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

    const flight = await db.Flight.findOne({
      attributes: ['id', 'flightNumber', 'departureDate', 'arrivalDate', 'distance'],
      where: { flightNumber: flightNumber },
      include: [
        { model: db.Airport, as: 'arrivalAirport', attributes: ['city', 'name'] },
        { model: db.Airport, as: 'departureAirport', attributes: ['city', 'name'] },
        { model: db.Company, attributes: ['rating', 'name'] },
        { model: db.Airplane, attributes: ['model', 'id'] },
      ],
    });
    const passenger = await db.Passenger.create(passengerData);

    const seat = await db.Seat.findOne({
      where: {
        AirplaneId: flight.Airplane.id,
        seatNumber: seatData.seatNumber,
        seatClass: seatData.seatClass,
      },
    });

    if (seat) {
      seat.seatStatus = true;
      await seat.save();
    } else {
      return res.status(404).json({
        status: 'error',
        message: 'Ticket not created',
        details: 'Incorrect seatData, seat not found',
      });
    }

    const ticketPrice = await getTicketPrice(flight, seatData.seatClass);

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
    };

    res.status(201).json(passengerTicket);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: err.parent.code,
      message: 'Ticket not created',
      details: err.parent.sqlMessage,
    });
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
