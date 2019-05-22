const mongoose = require('mongoose');

const Concepcao = new mongoose.Schema({
  contextualizar : Number,
  problematizar : Number,
  pensamentoCriativo: Number,
  pensamentoCritico: Number,
  conceber: Number,
  capacidadeDeSintese: Number
});

const Equipe = new mongoose.Schema({
  nome : String,
  concepcao : Concepcao
});

const Turma = new mongoose.Schema({
  id: { 
    type: String,
    required: true, 
  },
  equipes : [Equipe],
  expectativa : {
    concepcao : Concepcao
  }
});

module.exports = mongoose.model('Turma', Turma);