const express = require('express');
const mongoose = require("mongoose");
const { urlencoded } = require('express');
const http = require('http');
const bodyParser = require("body-parser");
const allRoutes = require('./routes/main');


mongoose.connect('mongodb://localhost/final-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(express.json());
app.use(urlencoded({
    extended: false,
  })
);

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

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Node.js listening on port ${PORT}`);
});

//value(number of type) or type (time/rep/etc)
//class, workout, score, results