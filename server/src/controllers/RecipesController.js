const db = require('../config/database');

module.exports = {

    getAllRecipes (req, res) {
        db.all("SELECT * FROM recipe LIMIT 9", (err,rows) => {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    error: "Error while fetching recipes"
                });
            }
            else {
                res.send(rows);
            }
        });
    },
    createRecipe (req, res) {

        var recipe = req.body;

        db.run('INSERT INTO recipe(Title,Author_Id,Category,Ingredients,Method,Date_Created) ' +
                    'VALUES ($title,$author,$category,$ingredients,$method,$date)', {
            $title: recipe.title,
            $author: recipe.author,
            $category: recipe.category,
            $ingredients: recipe.ingredients,
            $method: recipe.method,
            $date: new Date().toISOString()
    }, err => {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    error: "Error while creating new recipe"
                });
            }
            else {
                res.send(recipe);
            }
        });
    }
};