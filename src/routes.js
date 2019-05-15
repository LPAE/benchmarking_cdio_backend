const express = require('express');
const TurmaController = require('./controllers/TurmaController');

const routes = express.Router();

const logPost = (req, res) => {
  res.send("asd")
}

routes.post('/id', TurmaController.store);

module.exports = routes;