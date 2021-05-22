const { sequelize } = require('../../models');
const db = require('../../models');
const Op = sequelize.Op;

module.exports = generateTickets = async () => {
  const ticketsArr = [];
  const ticketFlightsArr = [];
  const boardingPassesArr = [];
  const freeSeats = await db.Seat.findAll({
    where: {
      seatStatus: true,
    },
  });

  const ticketClassPrice = await db.Price.findOne();
  freeSeats.forEach(async (seat, index) => {
    if (seat.seatStatus === true) {
      airplane = await db.Airplane.findOne({
        where: {
          id: seat.AirplaneId,
        },
        attributes: ['id'],
        include: [
          {
            model: db.Flight,
            attributes: ['id', 'distance'],
            include: [{ model: db.Company, attributes: ['rating'] }],
          },
        ],
      });

      const ticketPrice = Math.round(
        ticketClassPrice[seat.seatClass] +
          (airplane.Flight.distance * airplane.Flight.Company.rating) / 50
      );

      const ticket = {
        id: index + 1,
        seatClass: seat.seatClass,
        PassengerId: index + 1,
        //seatNumber: seat.seatNumber,
        //price: ticketPrice,
        //FlightId: airplane.Flight.id, // there
      };

      const ticketFlight = {
        id: index + 1,
        FlightId: airplane.Flight.id,
        TicketId: index + 1,
        price: ticketPrice,
      };

      const boardingPass = {
        TicketFlightId: index + 1,
        seatNumber: seat.seatNumber,
      };

      ticketsArr.push(ticket);
      ticketFlightsArr.push(ticketFlight);
      boardingPassesArr.push(boardingPass);
    }
  });

  setTimeout(() => {
    console.dir(ticketsArr, { maxArrayLength: 610 });
    //console.dir(ticketFlightsArr, { maxArrayLength: 610 });
    console.log(JSON.stringify(ticketFlightsArr));
    console.log(JSON.stringify(boardingPassesArr));
  }, 10000);

  return boardingPassesArr;
};
