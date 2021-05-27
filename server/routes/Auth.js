const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', passport.authenticate('local'), authController.login);
router.get('/me', passport.authenticate('jwt'), authController.me);
router.get('/verify', authController.verify);

module.exports = router;
