const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Import de la configuration Sequelize

const User = sequelize.define('User', {
  // Définitions des colonnes
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Options du modèle
  tableName: 'users',
  timestamps: true,
});

module.exports = User;
