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
      user.hasMany(models.order,{
        as: 'seller',
        foreignKey: {
          name: 'idPenjual'
        }
      }),
      user.belongsToMany(models.product,{
        as: 'products',
        through: {
          model: "order",
          as: "conjunction"
        },
        foreignKey: 'idUser'
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