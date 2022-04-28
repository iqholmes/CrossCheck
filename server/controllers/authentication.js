const jwt = require('jwt-simple')
const Athlete = require('../models/athlete')
const keys = require('../config/dev')

function tokenForUser(user) {
  return jwt.encode({ sub: user._id,
    iat: Math.round(Date.now() / 1000),
    exp: Math.round(Date.now() / 1000 + 5 * 60 * 60)}, keys.TOKEN_SECRET)
}

exports.signin = function(req, res, next) {
  res.send({
    token: tokenForUser(req.user),
    email: req.user.email,
    firstName: req.user.firstName,
    lastName: req.user.lastName
  })
}

exports.currentUser = function(req, res) {
  res.send(req.user)
}

exports.signup = function(req, res, next) {
  const email = req.body.email
  const password = req.body.password
  const firstName = req.body.firstName
  const lastName = req.body.lastName

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'})
  }

  Athlete.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err) }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' })
    }
    
    const user = new Athlete()

    user.email = email
    user.firstName = firstName
    user.lastName = lastName
    user.setPassword(password)

    user.save(function(err, user) {
      if (err) { return next(err) }
      res.json({ token: tokenForUser(user), email: email, firstName: firstName, lastName: lastName })
    });
  });
}