const db = require('../config/config');

module.exports = {
    register (req, res) {
        var user = {
            "name": req.body.name,
            "email": req.body.email,
            "password": req.body.password,
        }
        console.log(user);
        db.run('INSERT INTO users(Name,Email,Password) VALUES ($name,$email,$password)', {
            $name: user.name,
            $email: user.email,
            $password: user.password
        }, err => {
            if (err) {
                console.log(err);
                res.status(400).send({
                    error: "Email already in use"
                });
            }
            else {
                res.send(JSON.stringify(user));
            }
        });
    }


};