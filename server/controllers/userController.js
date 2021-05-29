const db = require('../models');

exports.orders = async (req, res) => {
  try {
    const userId = req.user.id;

    const ticketFlights = await db.TicketFlight.findAll({
      where: { UserId: userId },
      attributes: ['price'],
      include: [
        { model: db.BoardingPass, attributes: ['seatNumber'] },
        { model: db.Ticket, attributes: ['seatClass'] },
        {
          model: db.Flight,
          attributes: ['flightNumber', 'departureDate', 'arrivalDate', 'distance'],
          include: [
            { model: db.Airport, as: 'departureAirport', attributes: ['city'] },
            { model: db.Airport, as: 'arrivalAirport', attributes: ['city'] },
            { model: db.Airplane, attributes: ['model'] },
            { model: db.Company, attributes: { exclude: ['id'] } },
          ],
        },
      ],
    });

    if (!ticketFlights.length) {
      return res.status(404).json({
        status: 'error',
        message: 'Orders not found',
        details: `User ${req.user.username} has no orders`,
      });
    }

    const orders = ticketFlights.map((ticketFlight) => {
      return {
        price: ticketFlight.price,
        seatNumber: ticketFlight.BoardingPass.seatNumber,
        seatClass: ticketFlight.Ticket.seatClass,
        flight: ticketFlight.Flight,
      };
    });

    res.status(200).json({
      status: 'success',
      data: { orders },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Orders search error',
      details: `An unknown error occurred`,
    });
  }
};
