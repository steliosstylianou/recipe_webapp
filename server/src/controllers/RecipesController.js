const db = require('../config/database');

module.exports = {

    getAllRecipes (req, res) {
        db.all("SELECT * FROM recipe LIMIT 15", (err,rows) => {
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
                    error: 'Error while creating new recipe'
                });
            }
            else {
                res.send(this.row);
            }
        });
    },

    getRecipe (req, res) {

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

};