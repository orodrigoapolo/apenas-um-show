var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(tempoTotal, mediaResposta, acertos, erros, respostaRapida, respostaLonga, fkUsuario, fkQuiz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",tempoTotal, mediaResposta, acertos, erros, respostaRapida, respostaLonga, fkUsuario, fkQuiz);

    var instrucaoSql = `
        INSERT INTO resultado (tempoTotal, mediaResposta, acertos, erros, respostaRapida, respostaLonga, fkUsuario, fkQuiz) 
                    VALUES ('${tempoTotal}', '${mediaResposta}', ${acertos}, ${erros}, '${respostaRapida}', '${respostaLonga}', ${fkUsuario}, ${fkQuiz});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};