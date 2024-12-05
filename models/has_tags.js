'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HAS_TAGS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HAS_TAGS.init({
    post_id: DataTypes.BIGINT,
    tag_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'HAS_TAGS',
  });
  return HAS_TAGS;
};