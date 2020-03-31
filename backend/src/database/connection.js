const knex = require ('knex');
const configuration = require ('../../knexfile');

// configuração do banco para testes;
// se a variável de teste estiver como 'teste' usa configuration.test se não configuration.development
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;