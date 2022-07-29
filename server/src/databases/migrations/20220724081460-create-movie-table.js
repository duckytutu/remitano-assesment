'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('Movies', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      userId: { type: Sequelize.INTEGER, allowNull: false, foreignKey: true },
      videoUrl: { type: Sequelize.STRING, allowNull: false },
      videoDescription: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: { type: 'timestamp' },
      updatedAt: { type: 'timestamp' },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('Users');
  },
};
