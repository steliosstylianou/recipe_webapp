const AuthenticationController =
    require('./controllers/AuthenticationController');
const RecipesController =
    require('./controllers/RecipesController');

module.exports = (app) => {
    app.post('/register',
        AuthenticationController.register);

    app.post('/login',
        AuthenticationController.login);

    app.get('/recipes',
        RecipesController.getAllRecipes);

    app.post('/recipe',
        RecipesController.createRecipe);

    // app.all('*', function(req, res) {
    //     throw new Error('Bad request');
    // });
    //
    // app.use(function(e, req, res, next) {
    //     if (e.message === 'Bad request') {
    //         res.status(404).send({
    //             error: {
    //                 msg: e.message,
    //                 // stack: e.stack,
    //             },
    //         });
    //     }
    // });
};
