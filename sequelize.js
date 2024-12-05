// Importation de Sequelize
const { Sequelize } = require('sequelize');

// Configuration Sequelize pour PostgreSQL
const sequelize = new Sequelize('blog', 'postgres', 'postgres', {
  host: 'localhost',       // Adresse où est hébergé le serveur PostgreSQL (ici sur la machine locale).
  port: 5432,              // Port utilisé pour se connecter à PostgreSQL (5432 est le port par défaut).
  dialect: 'postgres',     // Spécifie que la base de données utilisée est PostgreSQL.
  logging: console.log,    // Active les logs des requêtes SQL dans la console (mettre `false` pour désactiver).
});

// Tester la connexion à la base de données
(async () => {
  try {
    // Authentifie l'instance Sequelize avec les informations de connexion fournies
    await sequelize.authenticate();
    console.log('Connection to PostgreSQL has been established successfully.'); // Message de succès
  } catch (error) {
    // Capture et affiche les erreurs en cas d'échec de la connexion
    console.error('Unable to connect to PostgreSQL:', error);
  }
})();

// Exportation de l'instance Sequelize
module.exports = sequelize; // Permet d'utiliser cette configuration dans d'autres fichiers.

