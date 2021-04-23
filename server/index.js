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
const passengers = require('./seeders/passengers');
const tickets = require('./seeders/tickets');
const companies = require('./seeders/companies');
const prices = require('./seeders/prices');

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

const createPassengers = () => {
  passengers.map((item) => {
    db.Passenger.create(item);
  });
};

const createTickets = () => {
  tickets.map((item) => {
    db.Ticket.create(item);
  });
};
const createCompanies = () => {
  companies.map((item) => {
    db.Company.create(item);
  });
};

const createPrices = () => {
  prices.map((item) => {
    db.Price.create(item);
  });
};

//createPrices();
//createAirports();
//createCompanies();
//createFlights();
//createAirplanes();
//createSeats();
//createPassengers();
//createTickets();

db.sequelize.sync({ alter: true }).then(() => {
  app.listen(3001, () => {
    console.log('Server is running');
  });
});

// Object.values(sequelize.models).map(function(model) {
//   return model.destroy({ truncate: true });
// });
