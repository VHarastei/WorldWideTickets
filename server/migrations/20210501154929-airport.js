'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Airport',
      {
        city: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        lat: {
          type: Sequelize.DataTypes.DOUBLE,
          allowNull: false,
        },
        lon: {
          type: Sequelize.DataTypes.DOUBLE,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Airport');
  },
};
