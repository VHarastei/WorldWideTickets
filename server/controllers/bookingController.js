const db = require('../models');
const createBoardingPass = require('../utils/createBoardingPass');
const jwt = require('jsonwebtoken');
const getTicketPrice = require('../utils/getTicketPrice');

exports.booking = async (req, res) => {
  try {
    let user;
    if (req.headers && req.headers.token) {
      user = jwt.verify(req.headers.token, process.env.SECRET_KEY || 'qwerty').data;
    } // check if booking with account

    const { passengerData } = req.body;
    const validData = res.locals.validData; // valid seatData (all seats exist and free, booking flight also exist)

    const boardingPasses = [];

    let passenger = await db.Passenger.findOne({ where: passengerData }); // check if passenger already exist
    if (!passenger) passenger = await db.Passenger.create(passengerData);

    await Promise.all(
      validData.map(async (data) => {
        data.seat.seatStatus = true;
        await data.seat.save();

        const boardingPass = await createBoardingPass(
          data.flight,
          passenger,
          data.seat.seatNumber,
          data.seat.seatClass,
          data.ticketPrice,
          user
        );
        boardingPasses.push(boardingPass);
      })
    );

    res.status(201).json(boardingPasses);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'error',
      message: 'Ticket not created',
    });
  }
};

exports.validateBookingData = async (req, res, next) => {
  try {
    const { seatData } = req.body;
    let validData = [];

    await Promise.all(
      seatData.map(async (data) => {
        const flight = await db.Flight.findOne({
          attributes: ['id', 'flightNumber', 'departureDate', 'arrivalDate', 'distance'],
          where: { flightNumber: data.flightNumber },
          include: [
            { model: db.Airport, as: 'arrivalAirport', attributes: ['city', 'name'] },
            { model: db.Airport, as: 'departureAirport', attributes: ['city', 'name'] },
            { model: db.Company, attributes: ['rating', 'name'] },
            { model: db.Airplane, attributes: ['model', 'id'] },
          ],
        });

        if (!flight) {
          return res.status(404).json({
            status: 'error',
            message: 'Ticket not created',
            details: `Incorrect data, flight ${data.flightNumber} not found`,
          });
        }

        const seat = await db.Seat.findOne({
          where: {
            AirplaneId: flight.Airplane.id,
            seatNumber: data.seatNumber,
            seatClass: data.seatClass,
          },
        });

        if (!seat) {
          return res.status(404).json({
            status: 'error',
            message: 'Ticket not created',
            details: 'Incorrect data, seat not found',
          });
        }
        if (seat.seatStatus === true) {
          return res.status(400).json({
            status: 'error',
            message: 'Ticket not created',
            details: 'Incorrect data, seat already occupied',
          });
        }
        const ticketPrice = await getTicketPrice(flight, data.seatClass);

        validData.push({
          flight,
          seat,
          ticketPrice,
        });
      })
    );

    res.locals.validData = validData;
    next();
  } catch (err) {
    console.log(err);
  }
};

exports.price = async (req, res) => {
  try {
    const flightNumber = req.query.flightNumber;
    const seatClass = req.query.seatClass;

    const flight = await db.Flight.findOne({
      attributes: ['distance'],
      where: { flightNumber: flightNumber },
      include: [{ model: db.Company, attributes: ['rating'] }],
    });

    const ticketPrice = await getTicketPrice(flight, seatClass);

    res.status(200).json(ticketPrice);
  } catch (err) {
    console.log(err);
    res.status(404).send('Price not found');
  }
};
