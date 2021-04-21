const express = require('express');
const router = express.Router();
const { Flight } = require('../models');
const { Seat } = require('../models');
const { Airplane } = require('../models');
const { Airport } = require('../models');

router.get('/', async (req, res) => {
  const items = await Flight.findAll({
    include: [{ model: Airplane, include: [{ model: Seat }] }],
  });
  const airplanes = await Airplane.findAll({ include: Seat });

  //const all = Flight.findOne();
  //const items = await all.getAirport();
  res.json(items);
});
router.get('/airports', async (req, res) => {
  const items = await Flight.findAll({
    attributes: { exclude: ['departureAirportId', 'arrivalAirportId'] },
    include: [
      { model: Airport, as: 'departureAirport' },
      { model: Airport, as: 'arrivalAirport' },
    ],
  });
});

router.get('/city', async (req, res) => {
  const items = await Airport.findAll({
    include: [Flight],
  });

  res.json(items);
});

module.exports = router;
