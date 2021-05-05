const { UUIDV4 } = require('sequelize');
const db = require('.');
const { Airport } = require('./airport');

module.exports = (sequelize, DataTypes) => {
  const BoardingPass = sequelize.define(
    'BoardingPass',
    {
      seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
    }
  );

  BoardingPass.associate = (models) => {
    //BoardingPass.belongsTo(models.Ticket);
    //BoardingPass.belongsTo(models.Flight);
    BoardingPass.belongsTo(models.TicketFlight);
  };

  return BoardingPass;
};
