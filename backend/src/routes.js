// a variável abaixo contem todas as funções do express que foi instalado pelo comando npm install express no powershell
const express = require('express');
// Estamos desacoplando o módulo de rotas do express em uma variável 
const routes = express.Router();
// importando o controle ong 
const OngController = require('./controllers/OngController');
// importando o controle incidents
const IncidentController = require('./controllers/IncidentController');
// importando o controle profiller
const ProfileController = require('./controllers/ProfileController');
// importando o controle session 
const SessionController = require('./controllers/SessionControler');

//Rota:  o primeiro parametro é para pegar a raiz do projeto e o segundo uma função p/ responder Hello World

// MÉTODOS HTTP: 
// GET: Buscar/Listar informação no back-end
// POST: Criar uma informação no back-end
// PUT: Alterar uma informação no back-end
// DELETE: Deletar uma informação no back-end

// TIPOS DE PARÂMETROS:
// QUERY PARAMS: Parâmetros nomeados enviados na rota (URL) após "?" (filtros, paginação). Utiliza: GET. request.query;
// ROUTE PARAMS: Parâmetros utilizados para iddentificar um recurso. Ex: Registro no banco. (users/1). Utiliza: GET. request.params; e atenção aos ":" na ident do parâmetro app.get('/users/:id'
// REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recurso. Uliliza POST. request.body; precisa da intrução antes da rota: app.use(express.json());

// SQL: SQlite (Veja controller)
// Driver: SELECT * FROM users
// Query Builder: table('users').select('*').where() <-


//rota para login
routes.post('/sessions', SessionController.create);

// listar ongs
routes.get('/ongs', OngController.index);

// cadastrar ongs
routes.post('/ongs', OngController.create );

// listar ongs
routes.get('/incidents', IncidentController.index);

// listar ongs específicas
routes.get('/profile', ProfileController.index);

// cadastrar incidents
routes.post('/incidents', IncidentController.create );

// deletar incident
routes.delete('/incidents/:id', IncidentController.delete);

// Deixar a rota disponível para outros arquivos acessar.
module.exports = routes;