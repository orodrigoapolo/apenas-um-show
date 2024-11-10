var express = require("express");
var router = express.Router();

var perguntarController = require("../controllers/perguntarController");

router.get("/:dificuldadeId", function (req, res) {
  perguntarController.buscarPerguntarQuiz(req, res);
});


module.exports = router;