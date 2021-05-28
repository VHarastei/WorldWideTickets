const db = require('../models');

module.exports = getTicketPrice = async (flight, seatClass) => {
  const ticketClassPrice = await db.Price.findOne({ attributes: [seatClass] });
  const ticketPrice = Math.round(
    ticketClassPrice[seatClass] + (flight.distance * flight.Company.rating) / 50
  );
  return ticketPrice;
};
