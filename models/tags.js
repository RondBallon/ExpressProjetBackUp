'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TAGS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TAGS.init({
    nom: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TAGS',
  });
  return TAGS;
};