'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Seat',
      {
        seatClass: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        seatNumber: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 1,
            max: 60,
          },
        },
        seatStatus: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Seat');
  },
};
