var perguntarModel = require("../models/perguntarModel");

function buscarPerguntarQuiz(req, res) {
  var idDificuldade = req.params.dificuldadeId;

  if (idDificuldade == undefined) {
    res.status(400).send("idDificuldade está undefined!");
  }
  
  perguntarModel.buscarPerguntarQuiz(idDificuldade).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar as perguntar do Quiz: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  buscarPerguntarQuiz
}