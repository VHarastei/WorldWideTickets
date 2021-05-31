const express = require('express');
const db = require('../models');
const { generateMD5 } = require('../utils/generateHash');
const { sendEmail } = require('../utils/sendEmail');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { username, password, phone, email } = req.body;

    const emailInUse = await db.User.findOne({ where: { email } });
    if (emailInUse) {
      return res.status(409).json({
        status: 'error',
        message: 'Email in use',
      });
    }

    const data = {
      username,
      password: generateMD5(password + process.env.SECRET_KEY),
      phone,
      email,
      confirmHash: generateMD5(process.env.SECRET_KEY + email || Math.random().toString()),
    };

    const user = await db.User.create(data);

    sendEmail({
      from: 'wwtAdmin@gmail.com',
      to: data.email,
      subject: 'Email confirmation for WorldWideTickets',
      html: `To confirm your email, go to <a href="http://localhost:3000/user/verify/${data.confirmHash}">this link</a>`,
      callback: (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            status: 'error',
            message: 'Error when sending email',
            details: err,
          });
        } else {
          res.status(201).json({
            status: 'success',
            data: {
              id: user.id,
              username: user.username,
              phone: user.phone,
              email: user.email,
              confirmed: user.confirmed,
            },
          });
        }
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Register error');
  }
};

exports.login = async (req, res) => {
  try {
    const user = {
      id: req.user.id,
      username: req.user.username,
      phone: req.user.phone,
      email: req.user.email,
    };

    res.status(200).json({
      status: 'success',
      data: {
        ...user,
        token: jwt.sign({ data: user }, process.env.SECRET_KEY || 'qwerty', {
          expiresIn: '30 days',
        }),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('login error');
  }
};

exports.me = async (req, res) => {
  try {
    const user = {
      id: req.user.id,
      username: req.user.username,
      phone: req.user.phone,
      email: req.user.email,
    };

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('username error');
  }
};

exports.verify = async (req, res) => {
  try {
    const hash = req.query.hash;

    if (!hash) {
      res.status(400).json({
        status: 'error',
        message: 'Hash is not defined',
      });
    }
    const user = await db.User.findOne({ where: { confirmHash: hash } });
    if (!user) {
      res.status(404).json({
        status: 'error',
        message: 'User is not defined',
      });
    }

    user.confirmed = true;
    await user.save();

    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Verify error');
  }
};
