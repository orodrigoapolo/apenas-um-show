var database = require("../database/config");

function listaPersonagem() {

  var instrucaoSql = `SELECT idPersonagem, nome
                      FROM personagem;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarPersonagem(id) {
  
  var instrucaoSql = `SELECT idPersonagem, nome
                      FROM personagem
                      WHERE idPersonagem = ${id};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  listaPersonagem,
  buscarPersonagem
}
