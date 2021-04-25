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
      // onDelete: 'cascade',
      foreignKey: 'AirplaneId',
    });
    Airplane.hasMany(models.Flight);
    // models.Flight.belongsTo(Airplane, {
    //   foreignKey: 'AirplaneId',
    //   constraints: false,
    // });
  };

  return Airplane;
};
