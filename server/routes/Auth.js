const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');
const { sign } = require('jsonwebtoken');
const { generateMD5 } = require('../utils/generateHash');
const { sendEmail } = require('../utils/sendEmail');

router.post('/', async (req, res) => {
  try {
    const { username, password, phone, email } = req.body;

    const data = {
      username,
      password,
      phone,
      email,
      confirmHash: generateMD5(process.env.SECRET_KEY || Math.random().toString()),
    };
    sendEmail({
      from: 'wwtAdmin@gmail.com',
      to: data.email,
      subject: 'Email confirmation for WorldWideTickets',
      html: `To confirm your email, go to <a href=http://localhost:${process.env.PORT}/signup/verify=${data.confirmHash}></a>`,
      callback: (err) => {
        if (err) {
          res.status(404).json({
            status: 'error',
            message: 'Error when sending email',
            details: err,
          });
        }
      },
    });
    //const hash = await bcrypt.hash(password, 10);
    const user = await db.User.create({ username, password: hash, phone, email });

    res.status(201).json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Register error');
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await db.User.findOne({ where: { username } });
    if (!user)
      return res.status(404).json({
        status: 'error',
        message: 'User doesn`t exist',
        details: `User with username ${username} doesn't exist`,
      });

    const compare = await bcrypt.compare(password, user.password);
    if (!compare)
      return res.status(401).json({
        status: 'error',
        message: 'Wrong username or password',
        details: `Wrong username and password combination`,
      });
    const accessToken = sign({ username: user.username, id: user.id }, 'secret');

    res.status(201).json(accessToken);
  } catch (err) {
    console.log(err);
    res.status(500).send('username error');
  }
});

module.exports = router;
