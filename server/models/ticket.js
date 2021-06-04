module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define(
    'Ticket',
    {
      seatClass: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Passenger);
    Ticket.belongsToMany(models.Flight, { through: models.TicketFlight });
    Ticket.hasMany(models.TicketFlight);
  };

  return Ticket;
};
