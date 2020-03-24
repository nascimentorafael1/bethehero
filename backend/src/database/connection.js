// importando knex
const knex = require('knex');
// importando config do banco
const configuration = require('../../knexfile');
// passo a instrução para pegar a conexão de desenvolvimento no arquivo knexfile.
const connection = knex(configuration.development);

module.exports = connection;