module.exports = (sequelize, DataTypes) => {
  const Price = sequelize.define(
    'Price',
    {
      economy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      business: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      first: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Price;
};
