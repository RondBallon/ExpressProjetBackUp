// Permet à la CLI de enregistrer la configuration de la base de données //



const sequelize = require('../sequelize'); // Importation de ton fichier existant

module.exports = {
  development: {
    username: sequelize.config.username,
    password: sequelize.config.password,
    database: sequelize.config.database,
    host: sequelize.config.host,
    dialect: sequelize.options.dialect,
    logging: sequelize.options.logging,
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'blog_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: 'postgres',
    database: 'blog_prod',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
