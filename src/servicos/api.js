import axios from "axios";

// https://viacep.com.br/ws/04372130/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws"
});

export default api;