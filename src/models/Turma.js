const mongoose = require('mongoose');

const Turma = new mongoose.Schema({
  curso: {
    type: String,
    required: true
  },
  projeto: {
    type: String,
    required: true
  },
  semestre: {
    type: String,
    required: true
  },
  equipes: [{}],
  expectativa: {}
});

module.exports = mongoose.model('Turma', Turma);
