const express = require('express');
const TurmaController = require('./controllers/TurmaController');

const routes = express.Router();

// Adiciona nova turma
routes.post('/turma', TurmaController.store);
// Adiciona nova equipe
routes.post('/turma/equipe', TurmaController.addEquipe);
// Adiciona nova Area
routes.post('/turma/equipe/area', TurmaController.addArea);
// Adiciona nova ou Atualiza Expectativa
routes.post('/turma/equipe/expectativa', TurmaController.addExpectativa);

// Retorna todas as turmas
routes.get('/turma', TurmaController.getAll);
// Retorna a turma específica
routes.get('/turma/:curso/:projeto/:semestre', TurmaController.getOne);


module.exports = routes;