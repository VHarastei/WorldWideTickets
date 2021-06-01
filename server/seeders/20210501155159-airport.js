'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('airports', [
      {
        city: 'Lviv',
        name: 'Danylo Halytskyi International Airport',
        lat: 49.8125,
        lon: 23.9561,
      },
      {
        city: 'Kyiv',
        name: 'Kyiv Boryspil International Airport',
        lat: 50.411198,
        lon: 30.446634,
      },
      {
        city: 'Paris',
        name: 'Paris Charles de Gaulle Airport',
        lat: 49.009724,
        lon: 2.547778,
      },
      {
        city: 'London',
        name: 'London Heathrow Airport',
        lat: 51.47002,
        lon: -0.454295,
      },
      {
        city: 'Dubai',
        name: 'Dubai International Airport',
        lat: 25.252777,
        lon: 55.364445,
      },
      {
        city: 'New York',
        name: 'John F. Kennedy International Airport',
        lat: 40.641766,
        lon: -73.780968,
      },
      {
        city: 'San Francisco',
        name: 'San Francisco International Airport',
        lat: 37.615223,
        lon: -122.389977,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('airports', null, {});
  },
};
