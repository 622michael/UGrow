'use strict';

module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('question', {
    content: { type: DataTypes.STRING, allowNull: false },
    answerType: { type: DataTypes.INTEGER, allowNull: true }
  })

  Question.associate = function(models) {
      // associations can be defined here
      Question.belongsTo(models.User)
    }

  return Question;
};