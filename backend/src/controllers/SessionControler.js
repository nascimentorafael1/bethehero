// conectando com o banco 
const connection = require('../database/connection');

module.exports = {

    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ong')
        .where('id', id)
        .select('name')
        .first(); // para retornar um resultado, senão retorna um Array

        // se não existir a ong retorna o status bad request
        if (!ong) {
            return response.status(400).json({ error: 'No Ong found with this ID'});
        }

        return response.json(ong);
    }

}