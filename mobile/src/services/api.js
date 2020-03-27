import axios from 'axios';
const api = axios.create({
    // no mobile colocar o ip para conectar no terminal e não no celular.
    baseURL: 'http://192.168.100.92:3333'
});

export default api;