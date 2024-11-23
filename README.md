# Quiz Dragon Ball

O objetivo do Projeto Dragon Ball Quiz é desenvolver uma plataforma interativa de quiz para os fãs da franquia, com o intuito de proporcionar uma experiência divertida e educativa, testando o conhecimento sobre o universo de Dragon Ball. Além disso, o projeto visa criar uma dashboard personalizada para que os usuários possam acompanhar seu desempenho, analisar suas respostas e identificar áreas de melhoria. 

![Imagem-NewJobs](img-readme/foto-personagens.png)

## Solução Proposta
O Projeto Dragon Ball Quiz tem como objetivo engajar e unir os fãs de Dragon Ball em uma experiência digital divertida e educativa, promovendo a interação e o amor pelo universo criado por Akira Toriyama. A dashboard de desempenho permitirá que os usuários acompanhem seu progresso e se desafiem a melhorar, aumentando a motivação para aprender mais sobre a série. Além disso, a plataforma incentivará a comunidade a se conectar e competir de maneira saudável, contribuindo para o fortalecimento da base de fãs e a valorização contínua da franquia. 

## Como roda o Projeto
As instruções abaixo ir ajudar a roda o projeto. Para isso, siga o passo-a-passo abaixo:

Aqui está um passo a passo detalhado para configurar e rodar o projeto **Dragon Ball** do GitHub:


## **Passo 1: Clonar o repositório**
1. Abra o terminal na sua máquina.
2. Navegue até o diretório onde deseja clonar o repositório.
3. Execute o comando:
   ```bash
   git clone https://github.com/orodrigoapolo/dragon-ball.git
   ```
4. Entre no diretório do projeto:
   ```bash
   cd dragon-ball
   ```

## **Passo 2: Instalar as dependências**
1. Certifique-se de ter o Node.js instalado em sua máquina (versão recomendada: LTS). Caso não tenha, baixe e instale do site oficial: [Node.js](https://nodejs.org/).
2. Instale as dependências do projeto executando:
   ```bash
   npm install
   ```

## **Passo 3: Configurar o arquivo `.env`**
1. Localize o arquivo `.env` no diretório raiz do projeto. Caso não exista, crie um arquivo `.env` e copie as configurações abaixo:
   ```bash
   AMBIENTE_PROCESSO=producao

   # Configurações de conexão com o banco de dados
   DB_HOST='localhost'
   DB_DATABASE='dragonball'
   DB_USER='dev'
   DB_PASSWORD='Sptech#2024'
   DB_PORT='3306'

   # Configurações do servidor de aplicação
   APP_PORT=8080
   APP_HOST=localhost
   ```

2. Certifique-se de ajustar os valores, especialmente:
   - **DB_HOST**: Endereço do seu banco de dados (por exemplo, `localhost` para MySQL local).
   - **DB_DATABASE**: Nome do banco de dados (deixe como `dragonball`, a menos que queira mudar).
   - **DB_USER** e **DB_PASSWORD**: Insira as credenciais do seu MySQL.
   - **DB_PORT**: Porta do MySQL (padrão: `3306`).
   - **APP_PORT** e **APP_HOST**: Configurações para rodar o servidor localmente.

3. Se sua senha contiver caracteres especiais, mantenha-a entre `'aspas simples'`.

## **Passo 4: Configurar o banco de dados**
1. Certifique-se de que o MySQL está instalado e em execução na sua máquina.
2. Entre no MySQL usando o terminal ou outro cliente (como Workbench):
   ```bash
   mysql -u dev -p
   ```
   Substitua `dev` pelo nome de usuário que você configurou no `.env`.
3. Crie o banco de dados (caso ainda não exista):
   ```sql
   CREATE DATABASE dragonball;
   ```
4. Execute o script para criar as tabelas:
   - Navegue até o diretório `src/database` dentro do projeto.
   - No terminal, execute:
     ```bash
     mysql -u dev -p dragonball < script-tabelas.sql
     ```
     Substitua `dev` pelo nome de usuário configurado.

## **Passo 5: Rodar o projeto**
1. Execute o servidor:
   ```bash
   npm start
   ```
2. O servidor estará disponível em: [http://localhost:8080](http://localhost:8080) (ou na porta definida no `.env`).


## **Dicas de Debug**
- Se o projeto não iniciar, verifique:
  - Se o MySQL está rodando.
  - As credenciais no arquivo `.env`.
  - Se todas as dependências foram instaladas corretamente.
- Use o comando abaixo para verificar mensagens de erro:
  ```bash
  npm run dev
  ```

## Tecnologia usada
* JavaScript
* MySQL
* HTML
* CSS
* Node.JS
* API - [web-data-viz](https://github.com/BandTec/web-data-viz)
