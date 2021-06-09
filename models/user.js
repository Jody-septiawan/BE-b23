'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasOne(models.ktp,{
        as: 'ktp',
        foreignKey:{
          name: 'idUser'
        }
      }),
      user.hasMany(models.product,{
        as: 'product',
        foreignKey: {
          name: 'idUser'
        }
      }),
      // user.hasMany(models.order,{
      //   as: 'orderUser',
      //   foreignKey: {
      //     name: 'idUser'
      //   }
      // }),
      // user.hasMany(models.order,{
      //   as: 'orderPenjual',
      //   foreignKey: {
      //     name: 'idPenjual'
      //   }
      // }),
      user.belongsToMany(models.product,{
        as: 'userOrder',
        through: {
          model: "order",
          as: "conjunction"
        }
      })
    }
  };
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};