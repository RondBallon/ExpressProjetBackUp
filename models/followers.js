'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FOLLOWERS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FOLLOWERS.init({
    is_following_id: DataTypes.BIGINT,
    is_followed_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'FOLLOWERS',
  });
  return FOLLOWERS;
};