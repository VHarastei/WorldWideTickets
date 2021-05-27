const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const db = require('../models');
const { Op } = require('sequelize');
const { generateMD5 } = require('./generateHash');
module.exports = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await db.User.findOne({
          where: { [Op.or]: [{ email: username }, { username }] },
        });

        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }

        if (user.confirmed && user.password === generateMD5(password + process.env.SECRET_KEY)) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect password.' });
        }
      } catch (error) {
        done(error, false);
      }
    })
  );

  passport.use(
    new JWTStrategy(
      {
        secretOrKey: process.env.SECRET_KEY || 'qwerty',
        jwtFromRequest: ExtractJwt.fromHeader('token'),
      },
      async (payload, done) => {
        try {
          const user = await db.User.findByPk(payload.data.id);
          if (user) {
            return done(null, user);
          }
          done(null, false);
        } catch (err) {
          done(err, false);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await db.User.findByPk(id);
    done(null, user);
  });
};

exports.passport;
