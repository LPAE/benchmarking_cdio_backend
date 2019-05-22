const express = require('express');
const TurmaController = require('./controllers/TurmaController');

const routes = express.Router();

routes.post('/id', TurmaController.store);
routes.get('/id/:idvalue', TurmaController.get);

module.exports = routes;