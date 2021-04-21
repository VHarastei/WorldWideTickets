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
      onDelete: 'cascade',
      foreignKey: 'AirplaneId',
    });
    Airplane.belongsTo(models.Flight, {
      foreignKey: 'FlightId',
    });
    // models.Flight.belongsTo(Airplane, {
    //   foreignKey: 'AirplaneId',
    //   constraints: false,
    // });
  };

  return Airplane;
};
