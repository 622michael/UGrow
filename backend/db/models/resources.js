'use strict';

module.exports = (sequelize, DataTypes) => {
  var Resource = sequelize.define('Resource', {
    name: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
    scope: { type: DataTypes.ENUM('LU', 'LV', 'US'), allowNull: false }
  })

  return Resource;
};