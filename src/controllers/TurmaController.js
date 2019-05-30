const Turma = require('../models/Turma');

class TurmaController {
  async store(req, res) {
    try {
      const turmaExistente = await Turma.findOne({ curso: req.body.curso, projeto: req.body.projeto, numero: req.body.numero, semestre: req.body.semestre });
      if(!turmaExistente){
        const turma = await Turma.create(req.body);
        return res.json(turma);
      } else {
        console.log('Turma duplicada');
        return res.sendStatus(400);
      }
      
    } catch (err) {
      console.log('Não foi possível adicionar Turma');
      return res.sendStatus(400);
    }
  }

  async addEquipe(req, res) {
    try {
      const turma = await Turma.findOne({ curso: req.body.curso, projeto: req.body.projeto, numero: req.body.numero, semestre: req.body.semestre });
      if (!turma.equipes.find(equipe => equipe.nome === `${req.body.equipe.nome}`)) {
        turma.equipes.push(req.body.equipe);
        turma.save();
        return res.json(turma);
      } else {
        console.log('Equipe duplicada');
        return res.sendStatus(400);
      }
    } catch (err) {
      console.log(`Turma não encontrada`);
      return res.sendStatus(404);
    }
  }

  async getAll(req, res) {
    const turma = await Turma.find({}, '-_id', err => {
      if (err) console.log('Erro ao retornar todas as Turmas');
      console.log('Retornado todas as Turmas');
    });
    return res.json(turma);
  }

  async getOne(req, res) {
    try{
      let turma;

      if(req.params.numero)
        turma = await Turma.findOne({ curso: req.params.curso, projeto: req.params.projeto, numero: req.params.numero, semestre: req.params.semestre }, '-_id');
      else
        turma = await Turma.findOne({ curso: req.params.curso, projeto: req.params.projeto, semestre: req.params.semestre }, '-_id');
        
      if (turma){
        console.log('Retornado a Turma');
        return res.json(turma);
      } else {
        console.log('Turma não encontrada');
        return res.sendStatus(404);
      }
        
    } catch(err) {
      console.log(`Erro ao retornar a Turma ${req.params.nome}`);
      return res.sendStatus(404);
    }
  }
}

module.exports = new TurmaController();
