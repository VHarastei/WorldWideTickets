module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define(
    'Airport',
    {
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lat: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      lon: {
        type: DataTypes.DOUBLE,
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
