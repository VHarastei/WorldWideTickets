module.exports = airports = [
  {
    id: 1,
    city: 'Lviv',
    name: 'Danylo Halytskyi International Airport',
    lat: 49.8125,
    lon: 23.9561,
  },
  {
    id: 2,
    city: 'Kyiv',
    name: 'Kyiv Boryspil International Airport',
    lat: 50.411198,
    lon: 30.446634,
  },
  {
    id: 3,
    city: 'Paris',
    name: 'Paris Charles de Gaulle Airport',
    lat: 49.009724,
    lon: 2.547778,
  },
  {
    id: 4,
    city: 'London',
    name: 'London Heathrow Airport',
    lat: 51.47002,
    lon: -0.454295,
  },
  {
    id: 5,
    city: 'Dubai',
    name: 'Dubai International Airport',
    lat: 25.252777,
    lon: 55.364445,
  },
  {
    id: 6,
    city: 'New York',
    name: 'John F. Kennedy International Airport',
    lat: 40.641766,
    lon: -73.780968,
  },
  {
    id: 7,
    city: 'San Francisco',
    name: 'San Francisco International Airport',
    lat: 37.615223,
    lon: -122.389977,
  },
];

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Airports', [
//       { id: 1, city: 'Uzhhorod', name: 'Los Angeles International Airport' },
//       { id: 2, city: 'Lviv', airportName: 'Heathrow Airport' },
//       { id: 3, city: 'Paris', airportName: 'Dubai International Airport' },
//       { id: 4, city: 'Kyiv', airportName: 'Frankfurt Airport' },
//     ]);
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Airports', null, {});
//   },
// };
