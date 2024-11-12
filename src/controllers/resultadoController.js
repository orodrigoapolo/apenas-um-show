var resultadoModel = require("../models/resultadoModel");

function cadastrar(req, res) {
    var tempoTotal = req.body.tempoTotalServer;
    var mediaResposta = req.body.mediaRespostaServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var respostaRapida = req.body.respostaRapidaServer;
    var respostaLonga = req.body.respostaLongaServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkQuiz = req.body.fkQuizServer;


    // Faça as validações dos valores
    if (tempoTotal == undefined) {
        res.status(400).send("Seu tempo total está undefined!");
    } else if (mediaResposta == undefined) {
        res.status(400).send("Seu media está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Sua acertos está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Seu erros está undefined!");
    } else if (respostaRapida == undefined) {
        res.status(400).send("Seu resposta rapida está undefined!");
    } else if (respostaLonga == undefined) {
        res.status(400).send("Seu respostal longa está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else if (fkQuiz == undefined) {
        res.status(400).send("Seu fkQuiz está undefined!");
    } else {

        resultadoModel.cadastrar(tempoTotal, mediaResposta, acertos, erros, respostaRapida, respostaLonga, fkUsuario, fkQuiz)
            .then(function (resultado){
                res.status(201).json(resultado)
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o cadasstro do resultado! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            ); 
    }
}

module.exports = {
    cadastrar
}