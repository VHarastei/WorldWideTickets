const express = require('express');
const passport = require('passport');
const app = express();

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
};
const dotenv = require('dotenv');
dotenv.config();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

require('./core/passport')(passport);

const db = require('./models');

const flightsRouter = require('./routes/Flights');
const bookingRouter = require('./routes/Booking');
const authRouter = require('./routes/Auth');
const userRouter = require('./routes/User');
app.use('/flights', flightsRouter);
app.use('/booking', bookingRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);

//{ force: true }
db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, async () => {
    console.log('Server is running');
  });
});
