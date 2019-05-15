const mongoose = require('mongoose');

const Turma = new mongoose.Schema({
  id: { type: String }
});

module.exports = mongoose.model('Turma', Turma);