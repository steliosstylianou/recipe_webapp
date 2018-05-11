const db = require('../config/database');
const config = require('../config/config');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs');


function jwtSign (user) {
    const ONE_DAY = 60 * 60 * 24;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_DAY
    });
};

function hashPassword(password) {
    var salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
}

module.exports = {

    register (req, res) {

        var user = req.body;
        user.password = hashPassword(req.body.password);

        db.run('INSERT INTO users(Name,Email,Password) VALUES ($name,$email,$password)', {
            $name: user.name,
            $email: user.email,
            $password: user.password
        }, err => {
            if (err) {
                console.log(err);
                return res.status(400).send({
                    error: "Email already in use"
                });
            }
            else {
                res.send(user);
            }
        });
    },

    login (req, res) {
        const query = "select * from users where email = '" + req.body.email + "'";

        db.serialize(function() {

            db.get(query,function (err, row) {

                if (row === undefined){
                    return res.status(402).send({
                        error: "Invalid email"
                    });
                }

                const isValidPassword = bcrypt.compareSync(req.body.password, row.Password);

                if (!isValidPassword){
                    res.status(402).send({
                        error: "Invalid Password"
                    });
                }
                else res.send({
                    user: row,
                    token: jwtSign(row)
                });
            });
        });
    }
};