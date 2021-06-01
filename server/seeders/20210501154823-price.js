'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('prices', [
      {
        economy: 100,
        business: 500,
        first: 1000,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('prices', null, {});
  },
};
