const { UUIDV4 } = require('sequelize');
const db = require('.');
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
      distance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100,
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
    Flight.hasOne(models.Airplane, {
      foreignKey: 'FlightId',
    });
    // Flight.hasMany(models.Airplane, {
    //   foreignKey: 'FlightId',
    // });
    Flight.hasMany(models.Ticket, {
      foreignKey: 'FlightId',
    });
    Flight.belongsTo(models.Airport, {
      foreignKey: 'departureAirportId',
      as: 'departureAirport',
    });
    Flight.belongsTo(models.Airport, {
      foreignKey: 'arrivalAirportId',
      as: 'arrivalAirport',
    });
    Flight.belongsTo(models.Company, {
      //foreignKey: 'arrivalAirport',
    });
  };

  // Flight.afterBulkCreate(async (flight, options) => {
  //   try {
  //     flight.distance = 300;

  //     // let flights = await Flight.findAll({
  //     //   //attributes: { exclude: ['id', 'CompanyId', 'departureAirportId', 'arrivalAirportId'] },
  //     //   include: [
  //     //     { model: Airport, as: 'arrivalAirport', attributes: { exclude: ['id'] } },
  //     //     { model: Airport, as: 'departureAirport', attributes: { exclude: ['id'] } },
  //     //   ],
  //     // });

  //     // console.log('----------------------', flights);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  return Flight;
};
