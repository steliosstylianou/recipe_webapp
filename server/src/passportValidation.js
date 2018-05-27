const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config/config');
const db = require('./config/database');
// const auth = require('./controllers/AuthenticationController');

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.jwtSecret,
    }, async function(jwtPayload, done) {
        const query = 'SELECT * from users WHERE Id = ' + jwtPayload.Id;
        await (db.get(query, (err, row) => {
            if (err) {
                return done(new Error(), false);
            } else {
                console.log('User athenticated');
                return done(null, row);
            }
        }));
    }));

module.exports = null;
