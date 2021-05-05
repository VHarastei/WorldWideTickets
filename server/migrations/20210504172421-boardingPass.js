'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'BoardingPass',
      {
        seatNumber: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          dedfaultValue: 0,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BoardingPass');
  },
};
