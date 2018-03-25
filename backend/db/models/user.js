'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true

    // },
    name: {
      type: DataTypes.STRING,
      // validate: {
      //   max: {
      //       args: 200,
      //       msg: 'Your full name can only be 200 caracters.'
      //   }
      // }
    },
    email: {
      type: DataTypes.STRING,
      // unique: {
      //   args: true,
      //   msg: 'Oops. Looks like you already have an account with this email address. Please try to login.',
      //   fields: [sequelize.fn('lower', sequelize.col('email'))]
      // },
      // validate: {
      //   isEmail: {
      //       args: true,
      //       msg: 'The email you entered is invalid or is already in the system.'
      //   },
      //   max: {
      //       args: 254,
      //       msg: 'The email you entered is invalid or longer than 254 characters.'
      //   }
      // }
    },
    // userId: DataTypes.INTEGER,
    // expireTime: DataTypes.INTEGER,
    // id_token: DataTypes.STRING
  // },{
  //   classMethods: {
  //     associate: function(models) {
  //       // associations can be defined here
  //     }
  //   }
  });
  return User;
};