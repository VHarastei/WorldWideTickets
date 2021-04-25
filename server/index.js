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

const moment = require('moment');
const momentRandom = require('moment-random');

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

const generateFlights = async (amount) => {
  try {
    for (let i = 0; i < amount; i++) {
      const [departureAirportId, arrivalAirportId] = randPairId(1, 7);
      const CompanyId = randId(1, 5);
      const AirplaneId = randId(1, 10);

      const departureAirport = await db.Airport.findByPk(departureAirportId);
      const arrivalAirport = await db.Airport.findByPk(arrivalAirportId);

      const distance = calcCrow(
        departureAirport.lat,
        departureAirport.lon,
        arrivalAirport.lat,
        arrivalAirport.lon
      );

      const flightTime = distance * 5000;

      const startDate = moment();
      const endDate = moment(startDate).add(30, 'd').toDate();

      const departureDate = momentRandom(endDate, startDate).toDate();
      const arrivalDate = moment(departureDate).add(flightTime).add(30, 'm').toDate();

      const flight = {
        flightNumber: randFlightNumber(),
        distance,
        departureAirportId,
        arrivalAirportId,
        departureDate,
        arrivalDate,
        CompanyId,
        AirplaneId,
      };

      db.Flight.create(flight);
    }
  } catch (err) {
    console.log(err);
  }
};

//createPrices();
//createAirports();
//createCompanies();
//createAirplanes();
//generateFlights(50);
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

const calcCrow = (lat1, lon1, lat2, lon2) => {
  let R = 6371; // km
  let dLat = toRad(lat2 - lat1);
  let dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = Math.round(R * c);
  return d;
};

function toRad(Value) {
  return (Value * Math.PI) / 180;
}

function randPairId(min, max) {
  const depId = Math.floor(Math.random() * (max - min) + min);
  let arrId = Math.floor(Math.random() * (max - min) + min);
  if (depId === arrId) {
    return randPairId(min, max);
  }
  return [depId, arrId];
}

function randId(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randFlightNumber() {
  let strArr = [];
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 2; i++) {
    strArr.push(characters.charAt(Math.floor(Math.random() * characters.length)));
  }
  let num = Math.floor(1000 + Math.random() * 9000);
  return strArr.join('') + '-' + num;
}
