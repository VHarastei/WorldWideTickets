const { UUIDV4 } = require('sequelize');
const db = require('.');
const { Airport } = require('./airport');

module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define(
    'Flight',
    {
      flightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      departureDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      arrivalDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      distance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
    }
  );

  Flight.associate = (models) => {
    Flight.hasOne(models.Airplane, {
      foreignKey: 'FlightId',
    });
    Flight.belongsToMany(models.Ticket, { through: models.TicketFlight });
    Flight.hasMany(models.TicketFlight);

    Flight.belongsTo(models.Airport, {
      foreignKey: 'departureAirportId',
      as: 'departureAirport',
    });
    Flight.belongsTo(models.Airport, {
      foreignKey: 'arrivalAirportId',
      as: 'arrivalAirport',
    });
    Flight.belongsTo(models.Company, {});
  };

  return Flight;
};
