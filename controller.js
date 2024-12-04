module.exports = function (plop) {
    // Helper pour vérifier si une méthode est sélectionnée
    plop.setHelper('includes', (array, value) => array.includes(value));
  
    plop.setGenerator('controller', {
      description: 'Créer un contrôleur Express avec des vues Pug',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Nom du contrôleur (ex : user) :',
        },
        {
          type: 'checkbox',
          name: 'methods',
          message: 'Quelles méthodes HTTP souhaitez-vous inclure ?',
          choices: ['GET', 'POST', 'PUT', 'DELETE'],
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'controllers/{{name}}Controller.js',
          templateFile: 'plop-templates/controller.js',
        },
        // Générer les fichiers de vues Pug
        {
          type: 'add',
          path: 'views/{{name}}/index.pug',
          templateFile: 'plop-templates/views/{{name}}.pug',
        }],
    });
  }

  