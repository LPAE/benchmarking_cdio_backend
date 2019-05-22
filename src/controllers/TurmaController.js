const Turma = require('../models/Turma');

class TurmaController {
  async store(req, res) {
    const turma = await Turma.create(req.body);
    return res.json(turma);
  }

  async get(req, res) {
    const turma = await Turma.findOne({id : req.params.idvalue});
    return res.json(turma);
  }
}

module.exports = new TurmaController();