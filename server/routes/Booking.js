const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/', async (req, res) => {
  try {
    const { passengerData, flightNumber, seatData } = req.body;
    const passenger = await db.Passenger.create(passengerData);
    const flight = await db.Flight.findOne({
      attributes: ['id', 'distance'],
      where: { flightNumber: flightNumber },
      include: [{ model: db.Company, attributes: ['rating'] }],
    });

    const ticketClassPrice = await db.Price.findOne({ attributes: [seatData.seatClass] });
    const ticketPrice = Math.round(
      ticketClassPrice[seatData.seatClass] + (flight.distance * flight.Company.rating) / 20
    );

    const ticketData = {
      seatNumber: seatData.seatNumber,
      seatClass: seatData.seatClass,
      price: ticketPrice,
      FlightId: flight.id,
      PassengerId: passenger.id,
    };

    const ticket = await db.Ticket.create(ticketData);

    res.status(200).json(ticket);
  } catch (err) {
    console.log(err);
    res.status(404).send('Ticket not created');
  }
});

module.exports = router;
