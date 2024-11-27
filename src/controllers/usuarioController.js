var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            senha: resultadoAutenticar[0].senha,
                            personagem: resultadoAutenticar[0].personagem
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function atualizarSenha(req, res){
    var id = req.body.idUsuarioServer;
    var senhaAntiga = req.body.senhaAntigaServer;
    var senha = req.body.senhaServer;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (senhaAntiga == undefined) {
        res.status(400).send("Seu senhaAntiga está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.buscarSenha(id, senhaAntiga).then(function (valor){
            if(valor.length > 0){
                usuarioModel.atualizarSenha(id, senha)
                .then(
                    function (resultado) {
                        res.json({'atualizou': true});
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
            }else{
                res.status(409).send("Senha atual errada!")
            }
        })
    }
}

function atualizarUsuario(req, res){
    var id = req.body.idUsuarioServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var personagem = req.body.personagemServer;

    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("Seu personagem está undefined!");
    } else {
        usuarioModel.buscarUsuarioEmail(email).then(function (listaEmail){
            if(listaEmail.length > 1){
                res.status(409).send("E-mail já cadastrado")
            }else{
                if(listaEmail[0].idUsuario == id){
                    usuarioModel.atualizarUsuario(id, nome, email, personagem)
                    .then(
                        function (resultado) {
                            res.json({id, nome, email, personagem});
                        }
                    ).catch(
                        function (erro) {
                            console.log(erro);
                            console.log(
                                "\nHouve um erro ao realizar atualização do usuario! Erro: ",
                                erro.sqlMessage
                            );
                            res.status(500).json(erro.sqlMessage);
                        }
                    );
                }else{
                    res.status(409).send("E-mail já cadastrado")
                }
                
            }
        })
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var personagem = req.body.personagemServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("Seu personagem está undefined!");
    } else {

        usuarioModel.buscarUsuarioEmail(email).then(function (listaEmail){
            if(listaEmail.length > 1){
                res.status(409).send("E-mail já cadastrado")
            }else{
                usuarioModel.cadastrar(nome, email, senha, personagem)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
            }
        })
    }
}

module.exports = {
    autenticar,
    cadastrar,
    atualizarSenha,
    atualizarUsuario
}