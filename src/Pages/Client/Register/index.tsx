import { useState } from "react";
import Input from "../../../Components/Input";
import { isEmpty } from "../../../Components/Utils/clientMiddleware";
import { CPFMask, CEPMask } from "../../../Components/Utils/mask";
import UUID4Generate from "../../../Components/Utils/uuid";
import { useToastContext } from "../../../Context/Toast";
import ClientModel from "../../../Model/client";
import ClientApi from "../../../Services/clientsService";
import "./styles.css";

const RegisterClient = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState(new Date(0));
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState(0);
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [pais, setPais] = useState("");

  const addToast = useToastContext();

  function clear() {
    setNome("");
    setSobrenome("");
    setCpf("");
    setNascimento(new Date(0));
    setRua("");
    setNumero(0);
    setBairro("");
    setComplemento("");
    setCep("");
    setCidade("");
    setUf("");
    setPais("");
  }

  function handleSubmit() {
    const newClient: ClientModel = {
      id: UUID4Generate(),
      nome,
      sobrenome,
      cpf: CPFMask(cpf),
      dataDeNascimento: new Date(nascimento),
      endereco: {
        rua,
        numero,
        bairro,
        complemento,
        cep: CEPMask(cep),
        cidade,
        uf,
        pais,
      },
    };
      if (!isEmpty(newClient)) {
        ClientApi.post("", newClient).then(() => {
          addToast("Cadastro Realizado com sucesso", "sucess");
          clear();
        }, (error)=>{
          addToast(`erro: ${error}`, 'error')
        });
      } else addToast("Preencha todos os campos antes de realizar o cadastro");
  }

  return (
    <div className="clientRegisterContainer">
      <h2 id="formTitle">Cadastro</h2>
      <div className="clientRegisterForm">
        <div className="containersForm">
          <label className="formSectionTitle">Dados Pessoais</label>
          <div className="item">
            <label className="inputLabel">Nome:</label>
            <Input value={nome} handle={setNome} />
          </div>
          <div className="item">
            <label className="inputLabel">Sobrenome:</label>
            <Input value={sobrenome} handle={setSobrenome} />
          </div>
          <div className="item">
            <label className="inputLabel">CPF:</label>
            <Input options={CPFMask} value={cpf} handle={setCpf} />
          </div>
          <div className="item">
            <label className="inputLabel">Data de Nascimento:</label>
            <Input value={nascimento} handle={setNascimento} type="Date" />
          </div>
        </div>
        <div className="containersForm">
          <label className="formSectionTitle">Endereço</label>
          <div className="item">
            <label className="inputLabel">Rua:</label>
            <Input value={rua} handle={setRua} />
          </div>
          <div className="item">
            <div className="inner">
              <label className="inputLabel">Número:</label>
              <Input type="number" value={numero} handle={setNumero} />
            </div>
            <div className="inner">
              <label className="inputLabel">Bairro:</label>
              <Input value={bairro} handle={setBairro} />
            </div>
          </div>
          <div className="item">
            <label className="inputLabel">Complemento:</label>
            <Input value={complemento} handle={setComplemento} />
          </div>
          <div className="item">
            <label className="inputLabel">CEP:</label>
            <Input options={CEPMask} value={cep} handle={setCep} />
          </div>
          <div className="item">
            <label className="inputLabel">Cidade:</label>
            <Input value={cidade} handle={setCidade} />
          </div>
          <div className="item">
            <div className="inner">
              <label className="inputLabel">UF:</label>
              <Input value={uf} handle={setUf} />
            </div>
            <div className="inner">
              <label className="inputLabel">Pais:</label>
              <Input value={pais} handle={setPais} />
            </div>
          </div>
        </div>
        <button id="registerClient" onClick={handleSubmit} className="noSelect">
          Cadastrar
        </button>
      </div>
    </div>
  );
};
export default RegisterClient;
