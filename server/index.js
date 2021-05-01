const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require('./models');

const flightsRouter = require('./routes/Flights');
const bookingRouter = require('./routes/Booking');
app.use('/flights', flightsRouter);
app.use('/booking', bookingRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, async () => {
    console.log('Server is running');
  });
});
