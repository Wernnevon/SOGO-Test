import axios from "axios";

const ClientApi = axios.create({
    baseURL: 'http://localhost:8080/pessoas',
})
export default ClientApi;
