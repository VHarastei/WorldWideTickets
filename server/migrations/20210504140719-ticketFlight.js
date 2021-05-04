'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'TicketFlight',
      {
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 111,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TicketFlight');
  },
};
