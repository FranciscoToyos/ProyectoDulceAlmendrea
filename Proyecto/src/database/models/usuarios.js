'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usuarios.init({
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    avatar: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    esAdministrador: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};