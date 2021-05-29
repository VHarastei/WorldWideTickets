const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/orders', passport.authenticate('jwt'), userController.orders);

module.exports = router;
