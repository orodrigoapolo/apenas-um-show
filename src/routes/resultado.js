var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/", function (req, res) {
    resultadoController.cadastrar(req, res);
})

module.exports = router;