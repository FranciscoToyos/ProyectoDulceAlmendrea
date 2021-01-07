'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productos.belongsTo(models.categorias,{
        as:'categorias',
        foreignKey:'categoria_id'
        
      })
    }
  };
  productos.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    descuento: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    outstanding: DataTypes.TINYINT,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    colour: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'productos',
  });
  return productos;
};