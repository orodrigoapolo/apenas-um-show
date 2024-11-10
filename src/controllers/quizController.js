var quizModel = require("../models/quizModel");

function buscarQuiz(req, res) {
  var idQuiz = req.params.quizId;

  if (idQuiz == undefined) {
    res.status(400).send("idQuiz está undefined!");
  }
  
  quizModel.buscarQuiz(idQuiz).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os quiz: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function listaQuiz(req, res) {
  quizModel.listaQuiz().then((resultado) => {
    res.status(201).json(resultado);
  }
  ).catch((erro) => {
    console.log(erro);
    console.log(
      "\nHouve um erro ao buscar os quiz: ",
      erro.sqlMessage
    );
    res.status(500).json(erro.sqlMessage);
  });
}


module.exports = {
  buscarQuiz,
  listaQuiz
}