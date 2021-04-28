const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
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

const airplanes = require('./seeders/airplanes');
const seats = require('./seeders/seats');
const flights = require('./seeders/flights');
const airports = require('./seeders/airports');
const passengers = require('./seeders/passengers');
const tickets = require('./seeders/tickets');
const companies = require('./seeders/companies');
const prices = require('./seeders/prices');

const createFlights = () => {
  flights.map((item) => db.Flight.create(item));
};
const createSeats = () => {
  seats.map(async (seat) => await db.Seat.create(seat));
};
const createTickets = () => {
  tickets.map((item) => db.Ticket.create(item));
};
const createAirplanes = () => {
  airplanes.map((item) => db.Airplane.create(item));
};
const generateSimpleData = () => {
  prices.map((item) => db.Price.create(item));
  airports.map((item) => db.Airport.create(item));
  companies.map((item) => db.Company.create(item));
  passengers.map((item) => db.Passenger.create(item));
};

//generateSimpleData();
//createFlights();
//createAirplanes();
//createSeats();
//createTickets();
//const generateFlights = require('./utils/generators/flightsGenerator');

db.sequelize.sync().then(() => {
  app.listen(3001, async () => {
    console.log('Server is running');
  });
});
