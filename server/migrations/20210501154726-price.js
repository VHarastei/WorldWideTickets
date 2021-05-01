'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Price',
      {
        economy: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        business: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        first: {
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
    await queryInterface.dropTable('Price');
  },
};
