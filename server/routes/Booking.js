const express = require('express');
const passport = require('passport');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/price', bookingController.price);
router.post('/', bookingController.booking);

module.exports = router;
