const express = require('express');
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

const db = require('./models');

const flightsRouter = require('./routes/Flights');
const bookingRouter = require('./routes/Booking');
const authRouter = require('./routes/Auth');
app.use('/flights', flightsRouter);
app.use('/booking', bookingRouter);
app.use('/auth', authRouter);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, async () => {
    console.log('Server is running');
  });
});
