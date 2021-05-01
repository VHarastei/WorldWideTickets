module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define(
    'Seat',
    {
      seatClass: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 60,
        },
      },
      seatStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Seat.associate = (models) => {
    Seat.belongsTo(models.Airplane, {
      foreignKey: 'AirplaneId',
    });
  };
  return Seat;
};
