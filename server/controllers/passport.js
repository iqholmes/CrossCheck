const passport = require('passport');
const Athlete = require('../models/athlete')
const keys = require('../config/keys')
const ExtractJwt = require('passport-jwt').ExtractJwt;

const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  Athlete.findOne({ email: email }, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false) }

    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' })
    }

    return done(null, user);
  })
})

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.TOKEN_SECRET
}

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  Athlete.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false) }

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})

passport.use(jwtLogin)
passport.use(localLogin)

