const Turma = require('../models/Turma');

class TurmaController {
  async store(req, res) {
    const turma = await Turma.create(req.body);
    return res.json(turma);
  }
}

module.exports = new TurmaController();