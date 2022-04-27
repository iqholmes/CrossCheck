const express = require('express');
const mongoose = require("mongoose");
const { urlencoded } = require('express');
const http = require('http');
const bodyParser = require("body-parser");
const allRoutes = require('./routes/main');
const passport = require("passport");
const jwt = require("jwt-simple");
const router = require('./routes/sign-in');

const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;

mongoose.connect('mongodb://localhost/final-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router(app);

app.use(passport.initialize());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(allRoutes);

// passport.use(
//   "login",
//   new LocalStrategy(function (username, password, done) {
//     const authenticated = username === "John" && password === "Smith";

//     if (authenticated) {
//       return done(null, { myUser: "user", myID: 1234 });
//     } else {
//       return done(null, false);
//     }
//   })
// );

// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: "bananas",
// };

// passport.use(
//   "jwt",
//   new JwtStrategy(jwtOptions, function (payload, done) {
//     return done(null, { myUser: "user", myID: payload.sub });
//   })
// );

// const requireSignin = passport.authenticate("login", { session: false });

// const requireAuth = passport.authenticate("jwt", { session: false });

// app.post("/login", requireSignin, function (req, res, next) {
//   res.send({
//     token: tokenForUser(req.user),
//   });
// });

// app.get("/protected", requireAuth, function (req, res) {
//   res.send("Access Granted!");
// });

//server setup
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Node.js listening on port ${PORT}`);
});

//value(number of type) or type (time/rep/etc)
//class, workout, score, results