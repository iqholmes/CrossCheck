const express = require('express');
const mongoose = require("mongoose");
const http = require('http');
const bodyParser = require("body-parser");
//const router = require('express').Router();

mongoose.connect('mongodb://localhost/final-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Node.js listening on port ${PORT}`);
});
