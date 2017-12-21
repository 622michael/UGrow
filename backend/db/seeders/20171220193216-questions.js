'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [{
      content: "How was your day?",
      answerType: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: "Tell me about your day!",
      answerType: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: "My day was _____ ______",
      answerType: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', null, {})
  }
};
