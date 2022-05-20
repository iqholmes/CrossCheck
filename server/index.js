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

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + '/login', "client", "build", "index.html"));
  });
}

//server setup
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Node.js listening on port ${PORT}`);
});

//value(number of type) or type (time/rep/etc)
//class, workout, score, results