const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config/config');
const multer = require('multer');
const RecipesController = require('./controllers/RecipesController');
const RecipeValidator = require('./controllers/RecipeValidation');

const upload = multer(config.multer).single('recipe');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/uploads', express.static('uploads'));

require('./routes')(app);

app.listen(config.port);

console.log('Server started on port ' + config.port);

app.post('/recipes', (req, res) => {
    upload(req, res, function(err) {
        if (req.file == null || err) {
            return res.send({error: 'Please upload a valid file'});
        }
        RecipeValidator.create(req, res, function(error) {
            if (error == null) RecipesController.createRecipe(req, res);
        });
    });
});
