module.exports = (sequelize, DataTypes) => {
  const Airplane = sequelize.define(
    'Airplane',
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Airplane.associate = (models) => {
    Airplane.hasMany(models.Seat, {
      foreignKey: 'AirplaneId',
    });
    Airplane.belongsTo(models.Flight, {
      foreignKey: 'FlightId',
    });
  };

  return Airplane;
};
