const express = require('express');
const router = express.Router();
const { Flight } = require('../models');
const { Seat } = require('../models');
const { Airplane } = require('../models');
const { Airport } = require('../models');
const { Company } = require('../models');
const { Price } = require('../models');

router.get('/search', async (req, res) => {
  try {
    // const departureCity = req.query.departureCity;
    // const arrivalCity = req.query.arrivalCity;
    // const departureDate = req.query.departureDate;

    const departureAirport = await Airport.findOne({ where: { city: req.query.departureCity } });
    const arrivalAirport = await Airport.findOne({ where: { city: req.query.arrivalCity } });

    let flights = await Flight.findAll({
      attributes: ['flightNumber', 'departureDate', 'arrivalDate', 'distance'],
      include: [
        { model: Airplane, attributes: ['model'] },
        { model: Airport, as: 'departureAirport', attributes: ['city', 'name'] },
        { model: Airport, as: 'arrivalAirport', attributes: ['city', 'name'] },
        { model: Company, attributes: { exclude: ['id'] } },
      ],
      where: {
        departureAirportId: departureAirport.id,
        arrivalAirportId: arrivalAirport.id,
      },
    });

    const lowestTicketClassPrice = await Price.findOne({ attributes: ['economy'] });

    flights.map((flight) => {
      const ticketPrice = Math.round(
        lowestTicketClassPrice['economy'] + (flight.distance * flight.Company.rating) / 20
      );
      flight.setDataValue('lowestTicketPrice', ticketPrice);
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

router.get('/booking/:flightNumber', async (req, res) => {
  try {
    const flightNumber = req.params.flightNumber;

    const flight = await Flight.findOne({
      attributes: ['flightNumber', 'departureDate', 'arrivalDate', 'distance'],
      where: {
        flightNumber: flightNumber,
      },
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
      res.status(404).send('Flight Not Found');
    }
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

module.exports = router;
