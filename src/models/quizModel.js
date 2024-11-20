var database = require("../database/config");

function listaQuiz() {

  var instrucaoSql = `SELECT idQuiz, dificuldade, tempo
                      FROM quiz;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarQuiz(id) {
  
  var instrucaoSql = `SELECT idQuiz, dificuldade, tempo
                      FROM quiz
                      WHERE idQuiz = ${id};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  listaQuiz,
  buscarQuiz
}
