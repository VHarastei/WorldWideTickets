'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username: 'VHarastei',
        password: '898f1cca7cfa1507735041d19dccf68c',
        phone: '0966418545',
        email: 'garastey.vas@gmail.com',
        confirmHash: '32668e2192acdadbbd367bfc8f81dbf1',
        confirmed: true,
        createdAt: '2021-05-30 18:57:40',
        updatedAt: '2021-05-30 18:58:33',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
