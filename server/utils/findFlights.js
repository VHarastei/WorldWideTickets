const db = require('../models');

module.exports = findFlights = async (condition) => {
  const flights = await db.Flight.findAll({
    attributes: ['flightNumber', 'departureDate', 'arrivalDate', 'distance'],
    where: condition,
    include: [
      { model: db.Airport, as: 'departureAirport', attributes: ['city'] },
      { model: db.Airport, as: 'arrivalAirport', attributes: ['city'] },
      { model: db.Airplane, attributes: ['model'] },
      { model: db.Company, attributes: { exclude: ['id'] } },
    ],
  });
  return flights;
};
