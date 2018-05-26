const db = require('../config/database');
const config = require('../config/config');

module.exports = {

    getAllFavorites(req, res) {

        db.all('SELECT * FROM bookmarks WHERE User = $user', {
            $user: req.params.user
        }, (err, rows) => {
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
    },

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
            res.send({ id: this.lastID });
        });
    },

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
                res.send({ changes: this.changes});
            }
        });
    }
};