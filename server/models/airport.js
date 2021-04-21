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
    // Airport.hasMany(models.Flight, {
    //   //onDelete: 'cascade',
    //   as: 'departureAirport',
    // or
    // foreignKey: 'departureAirport',
    // });
    // Airport.hasMany(models.Flight, {
    //   //onDelete: 'cascade',
    //   as: 'arrivalAirport',
    // });
    // Airport.hasMany(models.Flight, {
    //   //onDelete: 'cascade',
    //   //foreignKey: 'AirportId',
    // });
  };

  return Airport;
};
