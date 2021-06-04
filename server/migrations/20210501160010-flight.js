'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Flight',
      {
        flightNumber: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        departureDate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        arrivalDate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        distance: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        CompanyId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'companies',
            },
            key: 'id',
          },
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Flight');
  },
};
