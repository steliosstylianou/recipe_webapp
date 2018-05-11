const AuthenticationController =
    require('./controllers/AuthenticationController');

module.exports = (app) => {
    app.post('/register',
        AuthenticationController.register);

    app.post('/login',
        AuthenticationController.login);

    app.all('*', function(req, res) {
        throw new Error('Bad request');
    });

    app.use(function(e, req, res, next) {
        if (e.message === 'Bad request') {
            res.status(400).send({
                error: {
                    msg: e.message,
                    // stack: e.stack,
                },
            });
        }
    });
};
