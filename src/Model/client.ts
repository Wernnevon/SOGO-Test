interface Endereco{
    rua: string;
    numero: number;
    bairro: string;
    complemento: string;
    cep: string;
    cidade: string;
    uf: string;
    pais: string;
}
export default interface ClientModel{
    nome: string;
    sobrenome: string;
    cpf:string;
    dataDeNascimento: Date;
    endereco: Endereco;
}