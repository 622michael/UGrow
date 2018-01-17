'use strict';
var models = require("../models")

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [

      {
        content: "My day sucked",
        QuestionId: 0,
        private: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Long ago in a land far away...",
        QuestionId: 1,
        private: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "It was a day I can't share.",
        QuestionId: 1,
        private: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "holy,shit",
        QuestionId: 2,
        private: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "utterly, miserable",
        QuestionId: 2,
        private: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, {});
  }
};
