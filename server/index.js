const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const db = require('./models');

const flightsRouter = require('./routes/Flights');
app.use('/flights', flightsRouter);

const airplanes = require('./seeders/airplanes');
const seats = require('./seeders/seats');
const flights = require('./seeders/flights');
const airports = require('./seeders/airports');
const { sequelize } = require('./models');

const createFlights = () => {
  flights.map((flight) => {
    db.Flight.create(flight);
  });
};

const createAirplanes = () => {
  airplanes.map((airplane) => {
    db.Airplane.create(airplane);
  });
};

const createSeats = () => {
  seats.map((seat) => {
    db.Seat.create(seat);
  });
};

const createAirports = () => {
  airports.map((item) => {
    db.Airport.create(item);
  });
};

try {
  //createAirports();
  //createFlights();
  //createAirplanes();
  //createSeats();
} catch (err) {
  console.log(err);
}

db.sequelize.sync({ alter: true }).then(() => {
  app.listen(3001, () => {
    console.log('Server is running');
  });
});

// Object.values(sequelize.models).map(function(model) {
//   return model.destroy({ truncate: true });
// });
