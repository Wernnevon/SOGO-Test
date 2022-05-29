import axios from "axios";
const ContractApi = axios.create({
    baseURL: 'http://localhost:8080/contratos',
})
export default ContractApi;