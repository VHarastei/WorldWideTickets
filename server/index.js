const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const db = require('./models');

const airplanesRouter = require('./routes/Airplanes');
app.use('/airplanes', airplanesRouter);

const airplanes = require('./seeders/airplanes');
const seats = require('./seeders/seats');
const createAirplanes = () => {
  airplanes.map((airplane) => {
    db.Airplane.create(airplane);
  });
};
//reateAirplanes();

const createSeats = () => {
  seats.map((seat) => {
    db.Seat.create(seat);
  });
};
//createSeats();

db.sequelize.sync({ alter: true }).then(() => {
  app.listen(3001, () => {
    console.log('Server is running');
  });
});
