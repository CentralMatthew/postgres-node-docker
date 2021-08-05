module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('Posts', {
      title: {
        type: Sequelize.DataTypes.STRING,
      },
      body: {
        type: Sequelize.DataTypes.STRING,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Posts');
  },
};
