const Turma = require('../models/Turma');

const findOneTurma = obj => {
  const query = {
    curso: obj.curso,
    projeto: obj.projeto,
    semestre: obj.semestre
  };
  if (obj.numero) query.numero = obj.numero;
  return Turma.findOne(query);
};

class TurmaController {
  async store(req, res) {
    try {
      const turmaExistente = await findOneTurma(req.body);

      if (!turmaExistente) {
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
      const turma = await findOneTurma(req.body);
      if (!turma.equipes.find(equipe => equipe.nome === `${req.body.equipe.nome}`)) {
        turma.equipes.push(req.body.equipe);
        await turma.save();
        return res.json(turma);
      } else {
        console.log('Equipe duplicada');
        return res.sendStatus(400);
      }
    } catch (err) {
      console.log(`Erro ao adicionar Equipe`);
      return res.sendStatus(404);
    }
  }

  async addArea(req, res) {
    try {
      const turma = await findOneTurma(req.body);

      const index = turma.equipes.findIndex(equipe => equipe.nome === `${req.body.equipe.nome}`);
      if (index != -1) {
        if (!turma.equipes[index].hasOwnProperty('area')) {
          turma.equipes[index] = { ...turma.equipes[index], area: {} };
        }
        Object.keys(req.body.equipe.area).forEach(key => {
          if (!(key in turma.equipes[index].area)) {
            turma.equipes[index].area = { ...turma.equipes[index].area, [key]: req.body.equipe.area[key] };
          }
        });
        turma.markModified('equipes');

        await turma.save();
        console.log('Area adicionada');
        return res.json(turma);
      } else {
        console.log('Equipe não encontrada');
        return res.sendStatus(400);
      }
    } catch (err) {
      console.log(`Erro ao adicionar Area`);
      return res.sendStatus(404);
    }
  }

  async addExpectativa(req, res) {
    try {
      const turma = await findOneTurma(req.body);
      turma.expectativa = { ...turma.expectativa, ...req.body.expectativa };
      await turma.save();
      return res.json(turma);
    } catch (err) {
      console.log(`Erro ao adicionar Expectativa`);
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
    try {
      const turma = await findOneTurma(req.params);

      if (turma) {
        console.log('Retornado a Turma');
        return res.json(turma);
      } else {
        console.log('Turma não encontrada');
        return res.sendStatus(404);
      }
    } catch (err) {
      console.log(`Erro ao retornar a Turma ${req.params.nome}`);
      return res.sendStatus(404);
    }
  }
}

module.exports = new TurmaController();
