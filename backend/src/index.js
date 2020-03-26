// a variável abaixo contem todas as funções do express que foi instalado pelo comando npm install express no powershell
const express = require('express');
// importando o de segurança
const cors = require('cors');
// importando a routes de outro arquivo
const routes = require('./routes');
// variavel que ira armazernar a aplicação
const app = express();
// define quem acessa o app. Usar no CORS: { origin: 'https://site' }
app.use(cors());
// Para o app compreender JSON
app.use(express.json());
// utilizando a routes no app.
app.use(routes)



// alicação irá ouvir a porta 3333
app.listen(3333);
