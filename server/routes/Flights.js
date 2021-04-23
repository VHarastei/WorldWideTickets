const express = require('express');
const router = express.Router();
const { Flight } = require('../models');
const { Seat } = require('../models');
const { Airplane } = require('../models');
const { Airport } = require('../models');
const { Ticket } = require('../models');
const { Passenger } = require('../models');
const { Company } = require('../models');

router.get('/', async (req, res) => {
  try {
    const items = await Flight.findAll({
      include: [{ model: Airplane, include: [{ model: Seat }] }, { model: Company }],
    });
    res.status(201).json(items);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/tickets', async (req, res) => {
  const items = await Ticket.findAll({
    include: [{ model: Passenger }],
  });

  res.json(items);
});

router.get('/search', async (req, res) => {
  try {
    const departureCity = req.query.departureCity;
    const arrivalCity = req.query.arrivalCity;
    //const departureDate = req.query.departureDate;

    const departureAirport = await Airport.findOne({
      where: { city: departureCity },
    });
    const arrivalAirport = await Airport.findOne({
      where: { city: arrivalCity },
    });

    const flights = await Flight.findAll({
      attributes: { exclude: ['id', 'CompanyId', 'departureAirportId', 'arrivalAirportId'] },
      include: [
        { model: Airport, as: 'arrivalAirport', attributes: { exclude: ['id'] } },
        { model: Airport, as: 'departureAirport', attributes: { exclude: ['id'] } },
        { model: Company, attributes: { exclude: ['id'] } },
      ],
      where: {
        departureAirportId: departureAirport.id,
        arrivalAirportId: arrivalAirport.id,
      },
    });

    res.status(200).json(flights);
  } catch (err) {
    console.log(err);
    res.status(404).send('Flights Not Found');
  }
});

router.get('/booking/:flightNumber', async (req, res) => {
  try {
    const flightNumber = req.params.flightNumber;

    const flight = await Flight.findOne({
      attributes: { exclude: ['id', 'CompanyId', 'departureAirportId', 'arrivalAirportId'] },
      where: {
        flightNumber: flightNumber,
      },
      order: [[Airplane, Seat, 'seatNumber', 'ASC']],
      include: [
        { model: Airport, as: 'arrivalAirport', attributes: { exclude: ['id'] } },
        { model: Airport, as: 'departureAirport', attributes: { exclude: ['id'] } },
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
