module.exports = flights = [
  { model: 'Boeing 747', FlightId: 1 },
  { model: 'Boeing 777', FlightId: 2 },
  { model: 'Airbus 217', FlightId: 3 },
  { model: 'Airbus 717', FlightId: 4 },
  { model: 'Boeing 333', FlightId: 5 },
];

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Airplanes', [
//       { model: 'Boeing 747', FlightId: 1 },
//       { model: 'Boeing 777', FlightId: 2 },
//       { model: 'Airbus 217', FlightId: 3 },
//       { model: 'Airbus 717', FlightId: 4 },
//       { model: 'Boeing 333', FlightId: 5 },
//     ]);
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Airplanes', null, {});
//   },
// };
