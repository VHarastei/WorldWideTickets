module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    'Company',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logoSrc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Company.associate = (models) => {
    Company.hasMany(models.Flight);
  };

  return Company;
};
