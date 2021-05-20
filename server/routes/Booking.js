const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/price', bookingController.price);
router.post('/', bookingController.booking);

module.exports = router;
