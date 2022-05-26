import Input from "../../../Components/Input";
import "./styles.css";

const RegisterClient = () => {
  return (
    <div className="clientRegisterContainer">
      <h2 id="formTitle">Cadastro</h2>
      <div className="clientRegisterForm">
        <div className="containersForm">
          <label className="formSectionTitle">Dados Pessoais</label>
          <div className="item">
            <label className="inputLabel">Nome:</label>
            <Input />
          </div>
          <div className="item">
            <label className="inputLabel">Sobrenome:</label>
            <Input />
          </div>
          <div className="item">
            <label className="inputLabel">CPF:</label>
            <Input />
          </div>
          <div className="item">
            <label className="inputLabel">Data de Nascimento:</label>
            <Input />
          </div>
        </div>
        <div className="containersForm">
          <label className="formSectionTitle">Endereço</label>
          <div className="item">
            <label className="inputLabel">Rua:</label>
            <Input />
          </div>
          <div className="item">
            <div className="item">
              <label className="inputLabel">Número:</label>
              <Input />
            </div>
            <div className="item">
              <label className="inputLabel">Bairro:</label>
              <Input />
            </div>
          </div>
          <div className="item">
            <label className="inputLabel">Complemento:</label>
            <Input />
          </div>
          <div className="item">
            <label className="inputLabel">CEP:</label>
            <Input />
          </div>
        <div className="item">
          <label className="inputLabel">Cidade:</label>
          <Input />
        </div>
        <div className="item">
          <div className="item">
            <label className="inputLabel">UF:</label>
            <Input />
          </div>
          <div className="item">
            <label className="inputLabel">Bairro:</label>
            <Input />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterClient;
