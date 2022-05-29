import ContractModel from "../../Model/contract";

export function isEmpty(contract: ContractModel): boolean {
  let today = new Date();
  today.setDate(today.getDate()-1)
  if (
    contract.id &&
    contract.pessoaCPF !== "" &&
    contract.pessoaCPF &&
    contract.validade >= today &&
    contract.dataDeRegistro
  )
    return false;
  return true;
}