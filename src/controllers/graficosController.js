var graficosModel = require("../models/graficosModel");

function quantidadeAcertos(req, res) {
  var idQuiz = req.params.quizId;
  var idUsuario = req.params.usuarioFk;

  if (idQuiz == undefined) {
    res.status(400).send("idQuiz está undefined!");
  }else if(idUsuario == undefined){
    res.status(400).send("idUsuario está undefined!");
  }
  
  graficosModel.quantidadeAcertos(idUsuario, idQuiz).then((resultado) => {
    if (resultado[0].totalAcerto != null) {
      res.status(200).json(resultado[0]);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar a quantidade de acertos. ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function quantidadeErros(req, res) {
  var idQuiz = req.params.quizId;
  var idUsuario = req.params.usuarioFk;

  if (idQuiz == undefined) {
    res.status(400).send("idQuiz está undefined!");
  }else if(idUsuario == undefined){
    res.status(400).send("idUsuario está undefined!");
  }
  
  graficosModel.quantidadeErros(idUsuario, idQuiz).then((resultado) => {
    if (resultado[0].totalErros != null) {
      res.status(200).json(resultado[0]);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar a quantidade de erros. ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function maiorTempo(req, res) {
  var idQuiz = req.params.quizId;
  var idUsuario = req.params.usuarioFk;

  if (idQuiz == undefined) {
    res.status(400).send("idQuiz está undefined!");
  }else if(idUsuario == undefined){
    res.status(400).send("idUsuario está undefined!");
  }
  
  graficosModel.maiorTempo(idUsuario, idQuiz).then((resultado) => {
    if (resultado[0].maiorTempo != null) {
      res.status(200).json(resultado[0]);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar o maior tempo. ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function menorTempo(req, res) {
  var idQuiz = req.params.quizId;
  var idUsuario = req.params.usuarioFk;

  if (idQuiz == undefined) {
    res.status(400).send("idQuiz está undefined!");
  }else if(idUsuario == undefined){
    res.status(400).send("idUsuario está undefined!");
  }
  
  graficosModel.menorTempo(idUsuario, idQuiz).then((resultado) => {
    if (resultado[0].menorTempo != null) {
      res.status(200).json(resultado[0]);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar o menor tempo. ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function mediaTempo(req, res) {
  var idQuiz = req.params.quizId;
  var idUsuario = req.params.usuarioFk;

  if (idQuiz == undefined) {
    res.status(400).send("idQuiz está undefined!");
  }else if(idUsuario == undefined){
    res.status(400).send("idUsuario está undefined!");
  }
  
  graficosModel.mediaTempo(idUsuario, idQuiz).then((resultado) => {
    if (resultado[0].mediaTempo != null) {
      res.status(200).json(resultado[0]);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar o media tempo. ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function listaResultadoQuiz(req, res) {
  var idQuiz = req.params.quizId;
  var idUsuario = req.params.usuarioFk;

  if (idQuiz == undefined) {
    res.status(400).send("idQuiz está undefined!");
  }else if(idUsuario == undefined){
    res.status(400).send("idUsuario está undefined!");
  }
  
  graficosModel.listaResultadoQuiz(idUsuario, idQuiz).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar o lista Resultado do quiz. ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function maiorPontuacao(req, res) {
  var idQuiz = req.params.quizId;
  graficosModel.maiorPontuacao(idQuiz).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar o media tempo. ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  quantidadeAcertos,
  quantidadeErros,
  maiorTempo,
  menorTempo,
  mediaTempo,
  listaResultadoQuiz,
  maiorPontuacao
}