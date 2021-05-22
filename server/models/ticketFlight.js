const { UUIDV4 } = require('sequelize');
const db = require('.');
const { Airport } = require('./airport');

module.exports = (sequelize, DataTypes) => {
  const TicketFlight = sequelize.define(
    'TicketFlight',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  TicketFlight.associate = (models) => {
    TicketFlight.belongsTo(models.Ticket);
    TicketFlight.belongsTo(models.Flight);
    TicketFlight.hasOne(models.BoardingPass);
    TicketFlight.belongsTo(models.User);
  };

  // db.Ticket.belongsToMany(db.Flight, { through: TicketFlight }); //
  // db.Flight.belongsToMany(db.Ticket, { through: TicketFlight });
  // db.Ticket.hasMany(TicketFlight); //
  // TicketFlight.belongsTo(db.Ticket); //
  // db.Flight.hasMany(TicketFlight);
  // TicketFlight.belongsTo(db.Flight); //

  return TicketFlight;
};
