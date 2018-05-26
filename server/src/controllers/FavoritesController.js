const db = require('../config/database');
const Recipe = require('./RecipesController');

module.exports = {

    getAllFavorites(req, res) {
        var recipesList = []
        var rows = db.each('SELECT Recipe FROM bookmarks WHERE User = $user', {
            $user: req.params.user
        }, (err, row) => {
            if (err) {
                console.log("error" + err)
                return res.status(500).send({error: 'Error while fetching favorites'})
            }
            db.get('SELECT * FROM recipe WHERE Id = $row', {
                $row: row.Recipe
            }, (error, row) => {
                console.log("Row1")
                console.log(row)
                if (error) {
                    console.log("error" + error)
                    return res.status(500).send({error: 'Error while fetching favorites'})
                }
                recipesList.push(row)
            })
        })
    },

    getFavorite(req, res) {
        db.get('SELECT * FROM bookmarks WHERE User = $user AND ' +
            'Recipe = $recipe', {
            $user: req.params.user,
            $recipe: req.params.recipe
        }, (err, row) => {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    error: "Error while fetching recipe with id " + req.params.recipe
                });
            }
            else {
                res.send(row);
            }
        });
    }
    ,

    createFavorite(req, res) {

        db.run('INSERT INTO bookmarks(User,Recipe) VALUES ' +
            '($user,$recipe)', {
            $user: req.params.user,
            $recipe: req.params.recipe
        }, function (err) {
            if (err) {
                console.log(err);
                console.log(req.params.user + req.params.recipe);
                return res.status(500).send({
                    error: 'Cannot favorite this recipe again'
                });
            }
            console.log(this.lastID)
            res.send({id: this.lastID});
        });
    }
    ,

    removeFavorite(req, res) {
        db.run('DELETE FROM bookmarks WHERE ' +
            'User = $user AND Recipe = $recipe', {
            $user: req.params.user,
            $recipe: req.params.recipe
        }, function (err) {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    error: 'Error while unfavoriting'
                });
            }
            else {
                res.send({changes: this.changes});
            }
        });
    }
}
;