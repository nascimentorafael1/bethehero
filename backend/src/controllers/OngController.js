// Importando criptografia
const crypto = require('crypto');
// conectando com o banco 
const connection = require('../database/connection');

module.exports = {
 
    async index(request, response) {
        const ongs = await connection('ong').select('*');
    
        return response.json(ongs);
    },


    // informo que a requisição é assíncrona e precisa aguardar a instrução com await para avançar
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;
    // Para gerar um id com 4 letras 
    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('ong').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,        
    });
    
    return response.json({ id });
    }
}