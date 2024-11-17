drop database dragonball;

CREATE DATABASE dragonball;

USE dragonball;

CREATE TABLE personagem (
    idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL unique,
    senha VARCHAR(100) NOT NULL,
    fkPersonagem INT,
    CONSTRAINT fkPersonagemUsuario
    FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem)
);

CREATE TABLE quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    dificuldade VARCHAR(45) NOT NULL,
    tempo TIME NOT NULL,
    CONSTRAINT chkDificuldade CHECK (dificuldade IN ('fácil', 'média', 'difícil'))
);

CREATE TABLE perguntar (
    idPerguntar INT AUTO_INCREMENT,
    fkQuiz INT,
    CONSTRAINT pkCompostaPerguntar PRIMARY KEY (idPerguntar, fkQuiz),
    pergunta VARCHAR(200) NOT NULL,
    alternativaA VARCHAR(100) NOT NULL,
    alternativaB VARCHAR(100) NOT NULL,
    alternativaC VARCHAR(100) NOT NULL,
    alternativaD VARCHAR(100) NOT NULL,
    respostaCorreta VARCHAR(100) NOT NULL,
    justificativa VARCHAR(200)  NOT NULL,
    FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);

CREATE TABLE resultado (
    idResultado INT AUTO_INCREMENT,
	fkUsuario INT,
    fkQuiz INT,
    CONSTRAINT pkCompostaRespota PRIMARY KEY (idResultado, fkUsuario, fkQuiz),
    tempoTotal TIME,
    mediaResposta TIME,
    acertos INT,
    erros INT,
    respostaRapida TIME,
    respostaLonga TIME,
    perguntasRespondidas INT,
    dtResposta DATETIME DEFAULT current_timestamp,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);

-- Inserindo personagens
INSERT INTO personagem (nome) VALUES
	('Goku'),
	('Vegeta'),
    ('Gohan'),
	('Piccolo');

-- Inserindo usuários
INSERT INTO usuario (nome, email, senha, fkPersonagem) VALUES
('Rodrigo', 'rodrigo@gmail.com', '12345678', 1),
('Goku', 'goku@dragonball.com', '12345678', 1),
('Vegeta', 'vegeta@dragonball.com', '12345678', 2),
('Gohan', 'gohan@dragonball.com', '12345678', 3),
('Piccolo', 'piccolo@dragonball.com', '12345678', 4);

-- Inserindo quizzes
INSERT INTO quiz (dificuldade, tempo) 
VALUES ('Fácil', '00:10:00'),
		('Média', '00:20:00'),
		('Difícil', '00:30:00');
        
        
-- UPDATE quiz set tempo = '00:01:00' where idQuiz = 1;

-- Perguntas fáceis
INSERT INTO perguntar (pergunta, alternativaA, alternativaB, alternativaC, alternativaD, respostaCorreta, justificativa, fkQuiz) 
VALUES ('Qual é o nome do planeta natal de Goku?', 'Terra', 'Namekusei', 'Vegeta', 'Sadala', 'Vegeta', 'O planeta natal de Goku é o Planeta Vegeta, onde os Saiyajins nasceram.', 1),
		('Quem é o melhor amigo de Goku?', 'Krillin', 'Vegeta', 'Yamcha', 'Piccolo', 'Krillin', 'Krillin é considerado o melhor amigo de Goku desde a infância.', 1),
		('Qual o nome do primeiro mestre de artes marciais de Goku?', 'Mestre Kame', 'Kaiô do Norte', 'Bills', 'Whis', 'Mestre Kame', 'Mestre Kame foi o primeiro professor de artes marciais de Goku.', 1),
		('Qual é o nome do filho de Goku?', 'Vegeta', 'Gohan', 'Trunks', 'Broly', 'Gohan', 'O filho mais velho de Goku se chama Gohan.', 1),
		('Qual é a transformação mais básica de Goku?', 'Super Saiyajin', 'Super Saiyajin 2', 'Kaiô-Ken', 'Super Saiyajin Blue', 'Kaiô-Ken', 'A técnica Kaiô-Ken foi uma das primeiras transformações de Goku.', 1),
		('Quem destruiu o planeta Vegeta?', 'Freeza', 'Goku', 'Vegeta', 'Bardock', 'Freeza', 'Freeza destruiu o planeta Vegeta, exterminando a maioria dos Saiyajins.', 1),
		('Qual é a cor do cabelo de Goku no Super Saiyajin?', 'Preto', 'Amarelo', 'Azul', 'Vermelho', 'Amarelo', 'A transformação Super Saiyajin faz o cabelo de Goku ficar amarelo.', 1),
		('Qual é o poder característico de Piccolo?', 'Genki Dama', 'Regeneração', 'Teletransporte', 'Super Força', 'Regeneração', 'Piccolo tem a habilidade de regenerar partes do seu corpo.', 1),
		('Qual raça é Vegeta?', 'Humano', 'Androide', 'Saiyajin', 'Namekuseijin', 'Saiyajin', 'Vegeta é um Saiyajin, uma raça de guerreiros do espaço.', 1),
		('Qual é o principal objetivo de Goku?', 'Destruir a Terra', 'Conquistar planetas', 'Aprimorar suas habilidades', 'Se tornar rei', 'Aprimorar suas habilidades', 'Goku está sempre buscando se aprimorar como lutador.', 1);

-- Perguntas médias
INSERT INTO perguntar (pergunta, alternativaA, alternativaB, alternativaC, alternativaD, respostaCorreta, justificativa, fkQuiz) 
VALUES ('Quem ensinou Goku a técnica do teletransporte?', 'Kaiô do Norte', 'Mestre Kame', 'Yardrat', 'Whis', 'Yardrat', 'Goku aprendeu o teletransporte com os habitantes do planeta Yardrat.', 2),
		('Qual foi o primeiro vilão que Gohan enfrentou sozinho?', 'Nappa', 'Cell Jr.', 'Raditz', 'Freeza', 'Cell Jr.', 'Gohan enfrentou os Cell Jr. sozinho durante o torneio de Cell.', 2),
		('Qual transformação foi necessária para Goku derrotar Freeza?', 'Super Saiyajin', 'Kaiô-Ken', 'Super Saiyajin 2', 'Super Saiyajin Blue', 'Super Saiyajin', 'Goku precisou do Super Saiyajin para derrotar Freeza.', 2),
		('Quem destruiu o planeta Namekusei?', 'Freeza', 'Goku', 'Vegeta', 'Cell', 'Freeza', 'Freeza destruiu Namekusei enquanto lutava contra Goku.', 2),
		('Qual é o poder característico de Majin Boo?', 'Absorver', 'Regeneração', 'Transformar em chocolate', 'Curar', 'Transformar em chocolate', 'Majin Boo pode transformar seus oponentes em doces.', 2),
		('Qual é o nome da fusão de Goku e Vegeta usando os brincos Potara?', 'Gogeta', 'Vegito', 'Gotenks', 'Vegetto', 'Vegito', 'A fusão Potara entre Goku e Vegeta cria o personagem Vegito.', 2),
		('Quem é o deus da destruição do Universo 7?', 'Bills', 'Whis', 'Zeno', 'Kaiô do Norte', 'Bills', 'Bills é o deus da destruição do Universo 7.', 2),
		('Qual é o planeta onde Goku treina com Kaiô do Norte?', 'Terra', 'Namekusei', 'Vegeta', 'Planeta de Kaiô', 'Planeta de Kaiô', 'Goku treina com Kaiô no planeta de Kaiô do Norte.', 2),
		('Qual foi a última forma de Majin Boo?', 'Super Boo', 'Kid Boo', 'Fat Boo', 'Evil Boo', 'Kid Boo', 'Kid Boo é a última e mais pura forma de Majin Boo.', 2),
		('Quem foi o primeiro Saiyajin a se transformar em Super Saiyajin 2?', 'Goku', 'Vegeta', 'Gohan', 'Trunks', 'Gohan', 'Gohan foi o primeiro a atingir o Super Saiyajin 2 contra Cell.', 2);

-- Perguntas difíceis
INSERT INTO perguntar (pergunta, alternativaA, alternativaB, alternativaC, alternativaD, respostaCorreta, justificativa, fkQuiz) 
VALUES ('Quem treinou Goku e Vegeta no Universo 6?', 'Champa', 'Vados', 'Whis', 'Beerus', 'Vados', 'Vados é a irmã de Whis e treinou Goku e Vegeta brevemente no Universo 6.', 3),
		('Qual foi o nível de poder de Goku ao enfrentar Raditz?', '120', '1.000', '416', '800', '416', 'O nível de poder de Goku ao enfrentar Raditz foi de 416.', 3),
		('Qual o nome da fusão dos filhos de Goku e Vegeta?', 'Vegito', 'Truhan', 'Gotenks', 'Truten', 'Gotenks', 'Gotenks é a fusão de Goten e Trunks.', 3),
		('Qual técnica foi usada por Vegeta para tentar derrotar Majin Boo?', 'Final Flash', 'Galick Gun', 'Big Bang Attack', 'Self Destruction', 'Self Destruction', 'Vegeta usou a autodestruição para tentar derrotar Majin Boo.', 3),
		('Quem foi o responsável pela destruição do Androide 19?', 'Goku', 'Vegeta', 'Piccolo', 'Trunks', 'Vegeta', 'Vegeta destruiu o Androide 19 após sua transformação em Super Saiyajin.', 3),
		('Quem é o primeiro personagem a atingir o Super Saiyajin 4?', 'Goku', 'Vegeta', 'Trunks', 'Broly', 'Goku', 'Goku foi o primeiro a atingir o Super Saiyajin 4 na série GT.', 3),
		('Qual é a fraqueza dos Saiyajins na sua forma original?', 'Lua cheia', 'Cauda', 'Fome', 'Sono', 'Cauda', 'A cauda dos Saiyajins é um ponto fraco em combate.', 3),
		('Qual é a transformação de Goku que combina o poder dos deuses com o Super Saiyajin?', 'Super Saiyajin Blue', 'Super Saiyajin 3', 'Ultra Instinct', 'Super Saiyajin God', 'Super Saiyajin Blue', 'O Super Saiyajin Blue combina o poder dos deuses com o Super Saiyajin.', 3),
		('Quem foi o primeiro Kaiôshin a aparecer na série?', 'Shin', 'Gowasu', 'Zamasu', 'Old Kai', 'Shin', 'Shin foi o primeiro Kaiôshin a aparecer durante a saga de Majin Boo.', 3),
		('Qual é o nome da espada lendária que Gohan usa na saga de Majin Boo?', 'Z Sword', 'Spirit Sword', 'Energy Sword', 'Kai Sword', 'Z Sword', 'A Z Sword é uma espada lendária que Gohan tenta usar contra Majin Boo.', 3);


-- Inserindo resultado
INSERT INTO resultado (tempoTotal, mediaResposta, acertos, erros, perguntasRespondidas, respostaRapida, respostaLonga, dtResposta, fkUsuario, fkQuiz) 
VALUES ('00:30:00', '00:15:00', 6, 4, 10, '00:20:00', '00:40:00', '2024-11-09 12:30:00', 1, 1),
		('00:45:00', '00:22:30', 1, 9, 10, '00:30:00', '00:50:00', '2024-11-09 13:00:00', 2, 2),
        ('01:00:00', '00:20:00', 4, 6, 10, '00:25:00', '01:05:00', '2024-11-09 13:30:00', 3, 3),
        ('00:35:00', '00:17:30', 9, 1, 10, '00:18:00', '00:37:00', '2024-11-09 14:00:00', 1, 1),
        ('00:50:00', '00:25:00', 10, 0, 10, '00:28:00', '00:55:00', '2024-11-09 14:30:00', 2, 2),
        ('00:55:00', '00:27:30', 2, 8, 10, '00:30:00', '01:00:00', '2024-11-09 15:00:00', 3, 3),
        ('00:40:00', '00:20:00', 5, 5, 10, '00:22:00', '00:45:00', '2024-11-09 15:30:00', 1, 1),
        ('01:05:00', '00:32:30', 7, 3, 10, '00:35:00', '01:10:00', '2024-11-09 16:00:00', 2, 2),
        ('00:48:00', '00:24:00', 3, 7, 10, '00:26:00', '00:50:00', '2024-11-09 16:30:00', 3, 3),
        ('00:52:00', '00:26:00', 10, 0, 10, '00:27:00', '00:54:00', '2024-11-09 17:00:00', 1, 1);



SELECT * FROM personagem;

SELECT * FROM usuario;

SELECT * FROM quiz;

SELECT * FROM resultado;

SELECT * FROM perguntar;

SELECT idUsuario, email, usuario.nome, senha, personagem.nome as personagem
FROM usuario JOIN personagem
ON usuario.fkPersonagem = personagem.idPersonagem;


SELECT idPersonagem, nome
FROM personagem
WHERE idPersonagem = 1;

SELECT idQuiz, dificuldade, tempo, tempoResposta
FROM quiz;

SELECT * FROM perguntar
WHERE fkQuiz = 1;

SELECT SUM(erros) as totalErros
FROM resultado
WHERE fkUsuario = 1 AND fkQuiz = 1;

SELECT SUM(acertos) as totalAcerto
FROM resultado
WHERE fkUsuario = 1 AND fkQuiz = 1;

SELECT MAX(tempoTotal) as maiorTempo
FROM resultado
WHERE fkUsuario = 1 AND fkQuiz = 1 AND perguntasRespondidas = 10; 

SELECT MIN(tempoTotal) as menorTempo
FROM resultado
WHERE fkUsuario = 1 AND fkQuiz = 1 AND perguntasRespondidas = 10;

SELECT SEC_TO_TIME(AVG(tempoTotal)) as mediaTempo
FROM resultado
WHERE fkUsuario = 1 AND fkQuiz = 1 AND perguntasRespondidas = 10;

SELECT dtResposta, acertos
FROM resultado
WHERE fkUsuario = 1 AND fkQuiz = 1 AND perguntasRespondidas = 10
ORDER by dtResposta
LIMIT 10;

SELECT *
FROM resultado
WHERE fkUsuario = 1 AND fkQuiz = 1;


SELECT DISTINCT u.nome, r.tempoTotal, r.acertos
FROM resultado r
JOIN usuario u ON r.fkUsuario = u.idUsuario
WHERE perguntasRespondidas = 10
ORDER BY r.acertos DESC, r.tempoTotal ASC
LIMIT 10;


WITH RankedResults AS (
  SELECT 
    u.nome, 
    r.tempoTotal, 
    r.acertos,
    ROW_NUMBER() OVER (
      PARTITION BY u.idUsuario 
      ORDER BY r.acertos DESC, r.tempoTotal ASC
    ) AS ranking
  FROM resultado r
  JOIN usuario u ON r.fkUsuario = u.idUsuario
  WHERE perguntasRespondidas = 10
)
SELECT nome, tempoTotal, acertos
FROM RankedResults
WHERE ranking = 1
ORDER BY acertos DESC, tempoTotal ASC
LIMIT 10;

