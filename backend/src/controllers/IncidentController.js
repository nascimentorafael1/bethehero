// conectando com o banco 
const connection = require('../database/connection');


module.exports = {
 
    async index(request, response) {
        // paginação: utilizando o query params da ? do URL, iremos usar a page
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count()
        // o resultado do contador de registro irá retornar no cabeçalho da requisição.
        response.header('X-Total-Count', count['count(*)']);

        const incidents = await connection('incidents')
            .join('ong', 'ong.id', '=', 'incidents.ong_id') // no join cito (tabela relacionada, campo tabela relacionada, igual, campo chave estrangeira)
            .limit(5)  // paginação: limitar no select para retornar 5 registros
            .offset((page - 1) * 5)  // paginação: a subtração para retornar 0 e pegar os 5 primeiros registros, depois pega a partir dos 5, 10, 15 ...
            .select(['incidents.*'
                    , 'ong.name'
                    , 'ong.email'
                    , 'ong.whatsapp'
                    , 'ong.city'
                    , 'ong.uf']);
    
        return response.json(incidents);
    },


    async create(request, response) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;
    
        // crio um const com o resultado destruturado do id para retornar na próxima instrução.
    const [id] = await connection('incidents').insert({
        title, 
        description, 
        value,
        ong_id,        
    });
    
    return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        // se o ong_id do registro for diferente do autenticado retorna erro 401 não autorizado.(pesq http status code)
        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        
        }

        await connection('incidents').where('id', id).delete();
        // status de nenhum conteúdo como resposta.
        return response.status(204).send();

    }
};