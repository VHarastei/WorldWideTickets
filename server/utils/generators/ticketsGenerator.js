const { sequelize } = require('../../models');
const db = require('../../models');
const Op = sequelize.Op;

module.exports = generateTickets = async () => {
  const ticketsArr = [];
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
          (airplane.Flight.distance * airplane.Flight.Company.rating) / 20
      );

      const ticket = {
        id: index + 1,
        seatNumber: seat.seatNumber,
        seatClass: seat.seatClass,
        price: ticketPrice,
        FlightId: airplane.Flight.id, // there
        PassengerId: index + 1,
      };
      //await createTicket(seat.seatNumber, seat.seatClass, ticketPrice, airplane.Flight.id, index);

      ticketsArr.push(ticket);
    }
  });

  setTimeout(() => {
    console.log(JSON.stringify(ticketsArr));
  }, 10000);

  return ticketsArr;
};
