const { DataTypes } = require('sequelize');

module.exports = (client) => {
  const Users = client.define(
    'Users',
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );

  return Users
};
