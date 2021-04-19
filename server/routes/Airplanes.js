const express = require('express');
const router = express.Router();
const { Airplane } = require('../models');
const { Seat } = require('../models');

router.get('/', async (req, res) => {
  const items = await Airplane.findAll({ include: Seat });
  res.json(items);
});

module.exports = router;
