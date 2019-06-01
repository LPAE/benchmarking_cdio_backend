const mongoose = require('mongoose');

const Concepcao = new mongoose.Schema({
  Contextualizar: Number,
  Problematizar: Number,
  'Pensamento Criativo': Number,
  'Pensamento Crítico': Number,
  Conceber: Number,
  'Capacidade de Síntese': Number
});

const Design = new mongoose.Schema({
  'Design Geral': Number,
  'Identificar Partes': Number,
  'Análise Das Partes': Number,
  Desenvoltura: Number,
  'Pensamento Criativo': Number,
  'Pensamento Crítico': Number,
  'Capacidade De Síntese': Number
});

const Implementacao = new mongoose.Schema({
  Comprometimento: Number,
  'Implementar Ideias': Number,
  'Testar e Verificar': Number,
  'Solucionar e Recomendar': Number,
  'Integar Recursos': Number,
  Desenvoltura: Number,
  'Capacidad de Síntese': Number,
  Entusiasmo: Number
});

const Operacao = new mongoose.Schema({
  'Apresentação Oral e Comunicação': Number,
  'Operação de Processos': Number,
  'Controle de Performance': Number,
  'Teste de Aceite': Number,
  'Reflexão Sobre o Projeto': Number,
  'Documento Sobre o Projeto': Number,
  'Conhecimento Novo': Number
});

const Equipe = new mongoose.Schema({
  nome: String,
  area: {
    concepcao: Concepcao,
    design: Design,
    implementacao: Implementacao,
    operacao: Operacao
  }
});

const Turma = new mongoose.Schema({
  curso: {
    type: String,
    required: true
  },
  projeto: {
    type: String,
    required: true
  },
  numero: Number,
  semestre: {
    type: String,
    required: true
  },
  equipes: [{}],
  expectativa: {}
});

module.exports = mongoose.model('Turma', Turma);
