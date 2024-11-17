var database = require("../database/config");

function quantidadeAcertos(idUsuario, idQuiz) {

  var instrucaoSql = `SELECT SUM(acertos) as totalAcerto
                      FROM resultado
                      WHERE fkUsuario = ${idUsuario} AND fkQuiz = ${idQuiz};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function quantidadeErros(idUsuario, idQuiz) {

  var instrucaoSql = `SELECT SUM(erros) as totalErros
                      FROM resultado
                      WHERE fkUsuario = ${idUsuario} AND fkQuiz = ${idQuiz};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function maiorTempo(idUsuario, idQuiz) {

  var instrucaoSql = `SELECT MAX(tempoTotal) as maiorTempo
                      FROM resultado
                      WHERE fkUsuario = ${idUsuario} AND fkQuiz = ${idQuiz} AND perguntasRespondidas = 10;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function menorTempo(idUsuario, idQuiz) {

  var instrucaoSql = `SELECT MIN(tempoTotal) as menorTempo
                      FROM resultado
                      WHERE fkUsuario = ${idUsuario} AND fkQuiz = ${idQuiz} AND perguntasRespondidas = 10;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function mediaTempo(idUsuario, idQuiz) {

  var instrucaoSql = `SELECT SEC_TO_TIME(AVG(tempoTotal)) as mediaTempo
                      FROM resultado
                      WHERE fkUsuario = ${idUsuario} AND fkQuiz = ${idQuiz} AND perguntasRespondidas = 10;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listaResultadoQuiz(idUsuario, idQuiz) {

  var instrucaoSql = `SELECT dtResposta, acertos
                      FROM resultado
                      WHERE ${idUsuario} AND fkQuiz = ${idQuiz} AND perguntasRespondidas = 10
                      ORDER by dtResposta
                      LIMIT 10;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function maiorPontuacao() {

  var instrucaoSql = `SELECT DISTINCT u.nome, r.tempoTotal, r.acertos
                      FROM resultado r
                      JOIN usuario u ON r.fkUsuario = u.idUsuario
                      WHERE perguntasRespondidas = 10
                      ORDER BY r.acertos DESC, r.tempoTotal ASC
                      LIMIT 10;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
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
