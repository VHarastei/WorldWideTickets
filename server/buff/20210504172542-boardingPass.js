'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //return queryInterface.bulkInsert('boardingPasses', []);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('boardingPasses', null, {});
  },
};
