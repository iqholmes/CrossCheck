const Authentication = require('../controllers/authentication')
const passportService = require('../controllers/passport')
const passport = require('passport')

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.post('/auth/signin', requireSignin, Authentication.signin)
  app.post('/auth/signup', Authentication.signup)
}

// app.post("/login", requireSignin, function (req, res, next) {
//   res.send({
//     token: tokenForUser(req.user),
//   });
// });

// app.get("/protected", requireAuth, function (req, res) {
//   res.send("Access Granted!");
// });