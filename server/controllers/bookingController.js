const db = require('../models');
const createBoardingPass = require('../utils/creators/createBoardingPass');

const getTicketPrice = async (flight, seatClass) => {
  const ticketClassPrice = await db.Price.findOne({ attributes: [seatClass] });
  const ticketPrice = Math.round(
    ticketClassPrice[seatClass] + (flight.distance * flight.Company.rating) / 50
  );
  return ticketPrice;
};

exports.booking = async (req, res) => {
  try {
    const { passengerData, seatData } = req.body;

    const boardingPasses = [];
    const passenger = await db.Passenger.create(passengerData);

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

        const seat = await db.Seat.findOne({
          where: {
            AirplaneId: flight.Airplane.id,
            seatNumber: data.seatNumber,
            seatClass: data.seatClass,
          },
        });

        if (seat) {
          seat.seatStatus = true;
          await seat.save();
        } else {
          return res.status(404).json({
            status: 'error',
            message: 'Ticket not created',
            details: 'Incorrect data, seat not found',
          });
        }

        const ticketPrice = await getTicketPrice(flight, data.seatClass);
        const boardingPass = await createBoardingPass(
          flight,
          passenger,
          data.seatNumber,
          data.seatClass,
          ticketPrice
        );

        boardingPasses.push(boardingPass);
      })
    );

    res.status(201).json(boardingPasses);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: err.parent.code || 'error',
      message: 'Ticket not created',
      details: err.parent.sqlMessage || 'error',
    });
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
