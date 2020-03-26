// importando serviço de integração com backend
import axios from 'axios';


const api = axios.create({
    // base da URL que estará em todas as chamadas.
    baseURL: 'http://localhost:3333',
});

export default api;