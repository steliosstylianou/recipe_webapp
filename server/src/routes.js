const AuthenticationController =
    require('./controllers/AuthenticationController');
const RecipesController =
    require('./controllers/RecipesController');
const loginValidator =
    require('./controllers/AuthenticationValitor');

module.exports = (app) => {
    app.post('/register',
        loginValidator.register,
        AuthenticationController.register);

    app.post('/login',
        AuthenticationController.login);

    app.get('/recipes',
        RecipesController.getAllRecipes);

    app.get('/recipes/:recipeId',
        RecipesController.getRecipe);

    app.get('/search/:query',
        RecipesController.searchRecipe);

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
