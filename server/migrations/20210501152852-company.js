'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Company',
      {
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        logoSrc: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        rating: {
          type: Sequelize.DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Company');
  },
};
