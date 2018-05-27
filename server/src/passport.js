const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config/config');
const auth = require('./controllers/AuthenticationController');

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.authentication.jwtSecret;

const strategy = new JwtStrategy(jwtOptions, function(jwtPayload, done) {
    console.log('payload received');
    try {
        const user = auth.findUser(jwtPayload.id);
        if (!user) {
            return done(new Error(), false);
        }
        return done(null, user);
    } catch (e) {
        return done(new Error(), false);
    }
});

passport.use(strategy);


module.exports = null;
