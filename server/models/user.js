'use strict';
const {hash} =require('../helper/bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task)
    }
  };
  User.init({
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          args : true,
          msg : "please input email format"
        },
        notEmpty : {
          args : true,
          msg : "email cannot be empty!"
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "password cannot be empty!"
        }
      }
    },
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks : {
        beforeCreate: (user, options) => {
          user.password = hash(user.password)
          user.organization = 'Hacktiv8'
        }
      },
  });
  return User;
};