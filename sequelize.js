  const { Sequelize } = require('sequelize');

  // Configuration Sequelize pour PostgreSQL
  const sequelize = new Sequelize('blog', 'postgres', 'postgres', {
    host: 'localhost', // Adresse de votre serveur PostgreSQL
    port: 5432,        // Port par défaut de PostgreSQL
    dialect: 'postgres', // Utilisation de PostgreSQL
    logging: console.log, // Permet de voir les requêtes SQL dans la console (désactivable avec `false`)
  });

  // Tester la connexion
  (async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection to PostgreSQL has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to PostgreSQL:', error);
    }
  })();

  module.exports = sequelize;
