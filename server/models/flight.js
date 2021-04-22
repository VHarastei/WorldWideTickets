const { UUIDV4 } = require('sequelize');
const { Airport } = require('./airport');

module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define(
    'Flight',
    {
      // id: {
      //   type: DataTypes.UUID,
      //   defaultValue: UUIDV4,
      //   allowNull: false,
      //   primaryKey: true,
      // },
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
    },
    {
      timestamps: false,
    }
  );

  Flight.associate = (models) => {
    Flight.hasMany(models.Airplane, {
      foreignKey: 'FlightId',
    });
    Flight.hasMany(models.Ticket, {
      foreignKey: 'FlightId',
    });
    Flight.belongsTo(models.Airport, {
      foreignKey: 'departureAirport',
    });
    Flight.belongsTo(models.Airport, {
      foreignKey: 'arrivalAirport',
    });
    Flight.belongsTo(models.Company, {
      //foreignKey: 'arrivalAirport',
    });
  };

  return Flight;
};