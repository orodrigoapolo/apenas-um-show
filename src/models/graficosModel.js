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

function maiorPontuacao(idQuiz) {

  var instrucaoSql = `select distinct usuario.nome, c.tempoTotal as Tempo, b.acertou as MaiorAcerto

                      from (select nome, max(acertos) as acertou from resultado join usuario on fkUsuario = idUsuario

                      where fkQuiz = ${idQuiz} AND perguntasRespondidas = 10 group by nome) as b

                                      join (select idUsuario as cc, nome, tempoTotal, acertos from resultado join usuario on fkUsuario = idUsuario

                      where fkQuiz = ${idQuiz} AND perguntasRespondidas = 10) as c

                                      join (select idUsuario as dd, nome, tempoTotal, acertos from resultado join usuario on fkUsuario = idUsuario

                      where fkQuiz = ${idQuiz} AND perguntasRespondidas = 10) as d

                                      join resultado join usuario on fkUsuario = idUsuario

                                                    where fkQuiz = ${idQuiz} AND perguntasRespondidas = 10 and b.nome = usuario.nome

                              and b.nome = usuario.nome

                              and usuario.idUsuario = c.cc

                              and c.acertos = b.acertou

                              order by b.acertou desc, c.tempoTotal;`;

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
