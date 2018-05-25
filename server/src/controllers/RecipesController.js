const db = require('../config/database');
const multer = require('multer');
const crypto = require('crypto');
var path = require('path');
const recipeValidator = require('./RecipeValidation');
const config = require('../config/config');

module.exports = {

    getAllRecipes(req, res) {

        db.all("SELECT * FROM recipe LIMIT 15", (err, rows) => {
            if (err) {
                console.log(err)
                return res.status(500).send({
                    error: "Error while fetching recipes"
                });
            }
            else {
                res.send(rows);
            }
        });
    },

    createRecipe(req, res) {
        var recipe = req.body;
        const host = req.hostname;

        db.run('INSERT INTO recipe(Title,Author_Id,Category,Ingredients,Method,Date_Created, ' +
            'Difficulty, Time, File, SubCategory) VALUES ' +
            '($title,$author,$category,$ingredients,$method,$date,$difficulty,$time,$file,$subcategory)', {
            $title: recipe.title,
            $author: recipe.author,
            $category: recipe.category,
            $ingredients: recipe.ingredients,
            $method: recipe.method,
            $date: new Date().toISOString(),
            $difficulty: recipe.difficulty,
            $time: recipe.time,
            $file: req.protocol + "://" + host + ':' +
            config.port + '/' + req.file.path,
            $subcategory: recipe.subcategory
        }, err => {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    error: 'Error while creating new recipe'
                });
            }
            else {
                res.send(recipe);
            }
        });
    },

getRecipe(req, res)
{

    db.get('SELECT * FROM recipe WHERE Id = $id)', {
        $id: req.params.id
    }, (err, row) => {
        if (err) {
            console.log(err);
            return res.status(500).send({
                error: "Error while fetching recipe with id " + req.params.id
            });
        }
        else {
            res.send(row);
        }
    });
}
// updateRecipe (req, res) {
//
//     db.run('UPDATE recipe SET $field WHERE $value)', {
//         $id: req.params.id
//     }, (err, row) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send({
//                 error: "Error while fetching recipe with id " + req.params.id
//             });
//         }
//         else {
//             res.send(row);
//         }
//     });
// },

}
;