'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        isUnique: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      }, 
      email: {
        type: Sequelize.STRING,
        isUnique :true,
        validate: {
          isEmail: true 
        }
      },
      userId: {
        allowNull: false,
        isUnique: true,
        type: Sequelize.INTEGER
      }, 
      expireTime: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_token: {
        allowNull: false,
        isUnique: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};