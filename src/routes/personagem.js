var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.get("/:personagemId", function (req, res) {
  personagemController.buscarPersonagem(req, res);
});

router.get("/", function (req, res) {
  personagemController.listaPersonagem(req, res);
})

module.exports = router;