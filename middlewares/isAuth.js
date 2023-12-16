const passport = require('passport');
const AnonymousStrategy = require('passport-anonymous').Strategy;
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {};
const User  = require('../models/user');
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_PASS;
passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        User.findOne({
            _id: jwt_payload._id,
        })
            .then((User) => 
                done(null, User))
            .catch((err) => 
                done(err, false));
        

    })
);
passport.use(new AnonymousStrategy());

const authenticate = passport.authenticate('jwt', { session: false });
const optionalAuthenticate = passport.authenticate(['jwt', 'anonymous'], { session: false });

module.exports = { authenticate, optionalAuthenticate };