import ClientModel from "../../Model/client";

export function isEmpty(client: ClientModel): boolean {
  if (
    client.id &&
    client.nome !== "" &&
    client.nome &&
    client.sobrenome !== "" &&
    client.sobrenome &&
    typeof(client.dataDeNascimento) === 'string' &&
    client.cpf !== "" &&
    client.cpf &&
    client.endereco.rua !== "" &&
    client.endereco.rua &&
    client.endereco.numero &&
    client.endereco.numero !== 0 &&
    client.endereco.bairro !== "" &&
    client.endereco.bairro &&
    client.endereco.cep !== "" &&
    client.endereco.cidade !== "" &&
    client.endereco.cidade &&
    client.endereco.uf &&
    client.endereco.uf !== "" &&
    client.endereco.pais &&
    client.endereco.pais !== ""
  )
    return false;
  return true;
}
