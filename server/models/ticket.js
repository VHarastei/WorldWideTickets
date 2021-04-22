module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define(
    'Ticket',
    {
      seat: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seatClass: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Passenger);
    Ticket.belongsTo(models.Flight, {
      foreignKey: 'FlightId',
    });
  };

  return Ticket;
};
