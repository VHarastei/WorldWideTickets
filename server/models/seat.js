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
    Seat.belongsTo(models.Airplane);
  };
  return Seat;
};
