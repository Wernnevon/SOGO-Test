import Input from "../../../Components/Input";
import "./styles.css";

const RegisterContract = () => {
  return (
    <div className="registerContractContainer">
      <h2 className="registerFormSectionTitle">Dados Pessoais</h2>
      <div className="registerContractForm">
        <div className="registerItem">
          <label className="registerInputLabel">Número do contrato:</label>
          <label className="registerInputLabel">32c2b30c-872a-492b-9c15-1b3d12677708</label>
        </div>
        <div className="registerItem">
          <label className="registerInputLabel">Data de Registro:</label>
          <label className="registerInputLabel">24/02/2000</label>
        </div>
        <div className="registerItem">
          <label className="registerInputLabel">Validade:</label>
          <Input value='' handle={()=>{}}/>
        </div>
        <div className="registerItem">
          <label className="registerInputLabel">CPF:</label>
          <Input value='' handle={()=>{}}/>
        </div>
        <div className="registerItem">
          <label className="registerInputLabel">Cliente:</label>
          <label className="registerInputLabel">Cliente 04</label>
        </div>
      </div>
    </div>
  );
};
export default RegisterContract;
