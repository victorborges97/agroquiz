import axios from "axios";
import { IP_PARA_SERVE } from "../../config";


const api = axios.create({
    baseURL: `http://${IP_PARA_SERVE}:3333`
});

export default api;