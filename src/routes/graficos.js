var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/quantidade-acertos/:usuarioFk/:quizId", function (req, res) {
  graficosController.quantidadeAcertos(req, res);
});

router.get("/quantidade-erros/:usuarioFk/:quizId", function (req, res) {
  graficosController.quantidadeErros(req, res);
});

router.get("/maior-tempo/:usuarioFk/:quizId", function (req, res) {
  graficosController.maiorTempo(req, res);
});

router.get("/menor-tempo/:usuarioFk/:quizId", function (req, res) {
  graficosController.menorTempo(req, res);
});

router.get("/media-tempo/:usuarioFk/:quizId", function (req, res) {
  graficosController.mediaTempo(req, res);
});

router.get("/lista-resultado-quiz/:usuarioFk/:quizId", function (req, res) {
  graficosController.listaResultadoQuiz(req, res);
});

router.get("/maior-pontuacao/", function (req, res) {
  graficosController.maiorPontuacao(req, res);
});

module.exports = router;