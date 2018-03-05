'use strict';

module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('Question', {
    content: { type: DataTypes.STRING, allowNull: false },
    answerType: { type: DataTypes.INTEGER, allowNull: false }
  })

  Question.associate = function(models) {
      // associations can be defined here
      Question.belongsTo(models.User)
      models.Question.hasMany(models.Answer)
    }

  return Question;
};