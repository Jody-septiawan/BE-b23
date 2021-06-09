'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // order.belongsTo(models.user,{
      //   as: 'user',
      //   foreignKey:{
      //     name: 'idUser'
      //   }
      // }),
      // order.belongsTo(models.product,{
      //   as: 'userPenjual',
      //   foreignKey:{
      //     name: 'idPenjual'
      //   }
      // })
    }
  };
  order.init({
    idUser: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER,
    idPenjual: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};