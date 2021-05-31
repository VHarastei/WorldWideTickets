const express = require('express');
const router = express.Router();

const flightsRouter = require('./Flights');
const bookingRouter = require('./Booking');
const authRouter = require('./Auth');
const userRouter = require('./User');
router.use('/flights', flightsRouter);
router.use('/booking', bookingRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);

module.exports = router;
