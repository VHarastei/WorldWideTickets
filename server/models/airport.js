module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define(
    'Airport',
    {
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      airportName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Airport.associate = (models) => {
    Airport.hasMany(models.Flight, {
      foreignKey: 'departureAirportId',
      as: 'departureAirport',
    });
    Airport.hasMany(models.Flight, {
      foreignKey: 'arrivalAirportId',
      as: 'arrivalAirport',
    });
  };

  return Airport;
};
