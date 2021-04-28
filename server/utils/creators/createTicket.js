const db = require('../../models');

module.exports = createTicket = async (seatNumber, seatClass, price, FlightId, PassengerId) => {
  const ticketData = {
    seatNumber,
    seatClass,
    price,
    FlightId,
    PassengerId,
  };

  const ticket = await db.Ticket.create(ticketData);
};
