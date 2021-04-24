const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(cors());
const db = require('./models');

const flightsRouter = require('./routes/Flights');
const bookingRouter = require('./routes/Booking');
app.use('/flights', flightsRouter);
app.use('/booking', bookingRouter);

const airplanes = require('./seeders/airplanes');
const seats = require('./seeders/seats');
const flights = require('./seeders/flights');
const airports = require('./seeders/airports');
const passengers = require('./seeders/passengers');
const tickets = require('./seeders/tickets');
const companies = require('./seeders/companies');
const prices = require('./seeders/prices');

const createFlights = () => {
  try {
    flights.map((flight) => {
      db.Flight.create(flight);
    });
  } catch (err) {
    console.log(err);
  }
};

const createAirplanes = () => {
  try {
    airplanes.map((airplane) => {
      db.Airplane.create(airplane);
    });
  } catch (err) {
    console.log(err);
  }
};

const createSeats = () => {
  try {
    seats.map((seat) => {
      db.Seat.create(seat);
    });
  } catch (err) {
    console.log(err);
  }
};

const createAirports = () => {
  try {
    airports.map((item) => {
      db.Airport.create(item);
    });
  } catch (err) {
    console.log(err);
  }
};

const createPassengers = () => {
  try {
    passengers.map((item) => {
      db.Passenger.create(item);
    });
  } catch (err) {
    console.log(err);
  }
};

const createTickets = () => {
  try {
    tickets.map((item) => {
      db.Ticket.create(item);
    });
  } catch (err) {
    console.log(err);
  }
};
const createCompanies = () => {
  try {
    companies.map((item) => {
      db.Company.create(item);
    });
  } catch (err) {
    console.log(err);
  }
};

const createPrices = () => {
  try {
    prices.map((item) => {
      db.Price.create(item);
    });
  } catch (err) {
    console.log(err);
  }
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
