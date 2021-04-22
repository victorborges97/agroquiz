import axios from "axios";

const api = axios.create({
    baseURL: "http://21.0.214.178:3333"
});

export default api;