'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LIKES extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LIKES.init({
    user_id: DataTypes.BIGINT,
    post_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'LIKES',
  });
  return LIKES;
};