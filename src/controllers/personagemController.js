var personagemModel = require("../models/personagemModel");

function buscarPersonagem(req, res) {
  var idPersonagem = req.params.personagemId;

  if (idPersonagem == undefined) {
    res.status(400).send("idPersonagem está undefined!");
  }
  
  personagemModel.buscarPersonagem(idPersonagem).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function listaPersonagem(req, res) {
  personagemModel.listaPersonagem().then((resultado) => {
    res.status(201).json(resultado);
  }
  ).catch((erro) => {
    console.log(erro);
    console.log(
      "\nHouve um erro ao realizar o cadastro! Erro: ",
      erro.sqlMessage
    );
    res.status(500).json(erro.sqlMessage);
  });
}


module.exports = {
  buscarPersonagem,
  listaPersonagem
}