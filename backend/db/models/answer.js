'use strict';
module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define('answer', {
    aText: DataTypes.STRING,
    private: DataTypes.BOOLEAN
  })

  Answer.associate = function(models) {
    // Answer.belongsTo(models.Question, {
    //   onDelete: "CASCADE",
    //   forgeinKey: {
    //     allowNull: false
    //   }
    // })
    // Answer.belongsTo(models.User)
    Answer.belongsTo(models.User)
    Answer.belongsTo(models.question)
  }

  return Answer;
};