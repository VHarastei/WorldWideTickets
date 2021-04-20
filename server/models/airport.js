module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define(
    'Airport',
    {
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Airport.associate = (models) => {
    Airport.hasMany(models.Flight, {
      onDelete: 'cascade',
      foreignKey: 'AirportId',
    });
  };

  return Airport;
};
