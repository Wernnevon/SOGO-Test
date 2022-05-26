import axios from "axios";
import ContractModel from "../Model/contract";

const api = axios.create({
    baseURL: process.env.URL,
})


export async function index():Promise<Array<ContractModel>>{
    const contractList: Array<ContractModel> = await api.get('/contratos');
    return contractList;
}
export async function findOne(id: string):Promise<ContractModel>{
    const contract: ContractModel = await api.get(`/contratos?id=${id}`);
    return contract;
}
export async function update(contract: ContractModel): Promise<void> {
    await api.put('/contratos', contract);
}
export async function remove(id: string): Promise<void>{
    await api.delete(`/contratos?id=${id}`);
}