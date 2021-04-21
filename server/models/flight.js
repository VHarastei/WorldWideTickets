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
      // departureAirport: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: Airport,
      //     key: 'id',
      //   },
      // },
      // arrivalAirport: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: Airport,
      //     key: 'id',
      //   },
      // },
    },
    {
      timestamps: false,
    }
  );

  Flight.associate = (models) => {
    Flight.hasMany(models.Airplane, {
      foreignKey: 'FlightId',
    });
    Flight.belongsTo(models.Airport, {
      as: 'departureAirport',
    });
    Flight.belongsTo(models.Airport, {
      as: 'arrivalAirport',
    });
    // Flight.belongsTo(models.Airport, {
    //foreignKey: 'departureAirport',
    //   foreignKey: 'AirportId',
    //   //as: 'departureAirport',
    // });

    // Flight.belongsTo(models.Airport, {
    //   foreignKey: 'AirportId',
    //   as: 'arrivalAirport',
    // });
  };

  return Flight;
};
