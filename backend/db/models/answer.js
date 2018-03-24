'use strict';
module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define('answer', {
    content: DataTypes.STRING,
    private: DataTypes.BOOLEAN
  })

  Answer.associate = function(models) {
    // models.Answer.belongsTo(models.Question, {
    //   onDelete: "CASCADE",
    //   forgeinKey: {
    //     allowNull: false
    //   }
    // })
    // models.Answer.belongsTo(models.User)
    // Answer.belongsTo(models.Question)
    // Answer.belongsTo(models.User)
  }

  return Answer;
};