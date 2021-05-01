'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Ticket',
      {
        seatNumber: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        seatClass: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ticket');
  },
};
