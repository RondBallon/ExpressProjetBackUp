const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Import de la configuration Sequelize

const User = sequelize.define('User', {
  // Définitions des colonnes
  username: {
    type: DataTypes.VARCHAR(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.VARCHAR(50),
    allowNull: false,
  },
  avatar: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  description: {
    type: DataTypes.VARCHAR(255),
    allowNull: true,
  },  
}, {
  // Options du modèle
  tableName: 'users',
  timestamps: true,
});

module.exports = User;
