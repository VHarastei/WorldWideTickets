const { UUIDV4 } = require('sequelize');

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
    },
    {
      timestamps: false,
    }
  );

  Flight.associate = (models) => {
    Flight.hasOne(models.Airplane, {
      foreignKey: 'FlightId',
    });
    Flight.belongsTo(models.Airport, {
      foreignKey: 'AirportId',
    });
  };

  return Flight;
};
