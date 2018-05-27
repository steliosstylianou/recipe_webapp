const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config/config');
const multer = require('multer');
const RecipesController = require('./controllers/RecipesController');
const RecipeValidator = require('./controllers/RecipeValidation');
const Authenticate = require('./policies/isAuth');

const upload = multer(config.multer).single('recipe');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/uploads', express.static('uploads'));

require('./routes')(app);

require('./passportValidation');

app.listen(config.port);

console.log('Server started on port ' + config.port);

// api for posting recipes
app.post('/recipes', Authenticate,
    (req, res) => {
    upload(req, res, function(err) {
        if (req.file === undefined || req.file === null || err) {
            return res.send({error: 'Please upload a valid file'});
        }
        RecipeValidator.create(req, res, function(error) {
            if (error == null) RecipesController.createRecipe(req, res);
        });
    });
});
