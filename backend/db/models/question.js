'use strict';

module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('question', {
    qText: { type: DataTypes.STRING, allowNull: false },
    qType: { type: DataTypes.INTEGER, allowNull: true },
    consider: { type: DataTypes.STRING, allowNull: true }
  })

  // Question.associate = function(models) {
  //     // associations can be defined here
  //     Question.belongsTo(models.User)
  //   }

  return Question;
};