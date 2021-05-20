const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.get('/:flightNumber', flightController.flight);
router.get('/', flightController.flightList);

module.exports = router;
