var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/:quizId", function (req, res) {
  quizController.buscarQuiz(req, res);
});

router.get("/", function (req, res) {
  quizController.listaQuiz(req, res);
})

module.exports = router;