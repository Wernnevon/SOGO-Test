import { useEffect, useState } from "react";
import Input from "../../../Components/Input";
import { useToastContext } from "../../../Context/Toast";
import { isEmpty } from "../../../Components/Utils/contractMiddleware";
import { CPFMask } from "../../../Components/Utils/mask";
import UUID4Generate from "../../../Components/Utils/uuid";
import ContractModel from "../../../Model/contract";
import ClientApi from "../../../Services/clientsService";
import ContractApi from "../../../Services/contractService";
import "./styles.css";

const RegisterContract = () => {
  const [id, setId] = useState(UUID4Generate());
  const [data, setData] = useState(new Date());
  const [validade, setValidade] = useState(new Date(0));
  const [cpf, setCPF] = useState("");
  const [client, setClient] = useState("");

  const addToast = useToastContext();

  useEffect(() => {
    let clientName;
    if (cpf !== "" && cpf.length === 14) {
      ClientApi.get(`?cpf=${cpf}`).then(({ data }) => {
        clientName = data[0]
          ? `${data[0].nome} ${data[0].sobrenome}`
          : "Nenhum Cliente Encontrado";
        setClient(clientName);
      });
    }
    setClient("Nenhum Cliente Encontrado");
  }, [cpf]);

  function clear() {
    setId(UUID4Generate());
    setData(new Date());
    setValidade(new Date(0));
    setCPF("");
    setClient("");
  }

  function handleSubmit() {
    const newContract: ContractModel = {
      id,
      dataDeRegistro: new Date(data),
      pessoaCPF: cpf,
      validade: new Date(validade),
      nomeCliente: client,
    };
    if (!isEmpty(newContract)) {
      ContractApi.post("", newContract).then(
        () => {
          addToast("Cadastro Realizado com sucesso", "sucess");
          clear();
        },
        (error) => {
          addToast(`erro: ${error}`, "error");
        }
      );
    } else addToast("Preencha todos os campos antes de realizar o cadastro");
  }

  return (
    <div className="registerContractContainer">
      <h2 className="registerFormSectionTitle">Dados Pessoais</h2>
      <div className="registerContractForm">
        <div className="registerItem">
          <label className="registerInputLabel">Número do contrato:</label>
          <label className="registerInputLabel">{id}</label>
        </div>
        <div className="registerItem">
          <label className="registerInputLabel">Data de Registro:</label>
          <label className="registerInputLabel">
            {data.toLocaleDateString()}
          </label>
        </div>
        <div className="registerItem">
          <label className="registerInputLabel">Validade:</label>
          <Input type="date" value={validade} handle={setValidade} />
        </div>
        <div className="registerItem">
          <label className="registerInputLabel">CPF:</label>
          <Input options={CPFMask} value={cpf} handle={setCPF} />
        </div>
        <div className="registerItem">
          <label className="registerInputLabel">Cliente:</label>
          <label className="registerInputLabel">{client}</label>
        </div>
      </div>
      <button id="registerContract" onClick={handleSubmit} className="noSelect">
        Cadastrar
      </button>
    </div>
  );
};
export default RegisterContract;
