'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.user,{
        as: 'user',
        foreignKey: {
          name: 'idUser'
        }
      }),
      // product.hasMany(models.order,{
      //   as: 'orderProduct',
      //   foreignKey: {
      //     name: 'idProduct'
      //   }
      // }),
      product.belongsToMany(models.user,{
        as: 'userOrder',
        through: {
          model: "order",
          as: "conjunction"
        }
      })
    }
  };
  product.init({
    nameImg: DataTypes.STRING,
    desc: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};