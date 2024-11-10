var database = require("../database/config");

function buscarPerguntarQuiz(id) {
  
  var instrucaoSql = `SELECT * FROM perguntar
                      WHERE fkQuiz = ${id};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarPerguntarQuiz
}
