'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Passenger',
      {
        firstName: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        dateOfBirth: {
          type: Sequelize.DataTypes.DATEONLY,
          allowNull: false,
        },
        country: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Passenger');
  },
};
