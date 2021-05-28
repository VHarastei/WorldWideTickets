const db = require('../models');

module.exports = createBoardingPass = async (
  flight,
  passenger,
  seatNumber,
  seatClass,
  price,
  user
) => {
  const ticketData = {
    seatClass,
    PassengerId: passenger.id,
  };
  const ticket = await db.Ticket.create(ticketData);

  const ticketFlightData = {
    price,
    FlightId: flight.id,
    TicketId: ticket.id,
    UserId: (user && user.id) || null,
  };
  const ticketFlight = await db.TicketFlight.create(ticketFlightData);

  const boardingPassData = {
    seatNumber,
    TicketFlightId: ticketFlight.id,
  };
  const boardingPass = await db.BoardingPass.create(boardingPassData);

  const passengerBoardingPass = {
    flight: {
      flightNumber: flight.flightNumber,
      departureDate: flight.departureDate,
      departureAirport: flight.departureAirport,
      arrivalAirport: flight.arrivalAirport,
      Airplane: flight.Airplane,
      Company: flight.Company,
    },
    passenger: {
      firstName: passenger.firstName,
      lastName: passenger.lastName,
    },
    seat: {
      seatNumber: boardingPass.seatNumber,
      seatClass: ticket.seatClass,
    },
  };

  return passengerBoardingPass;
};
