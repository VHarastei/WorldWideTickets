const express = require('express');
const router = express.Router();
const db = require('../models');
const createTicket = require('../utils/creators/createTicket');

//TODO:
//create get ticket price endpoint
//on frontend dont store this buffer price, only display

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

    await createTicket(
      seatData.seatNumber,
      seatData.seatClass,
      ticketPrice,
      flight.id,
      passenger.id
    );

    res.status(200).send('Ticket created successfully');
  } catch (err) {
    console.log(err);
    res.status(404).send('Ticket not created');
  }
});

module.exports = router;
