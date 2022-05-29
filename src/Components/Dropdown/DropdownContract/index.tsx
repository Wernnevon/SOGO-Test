import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "../styles.css";

interface PropsDropdown {
  nomeCliente: string;
  id: string;
  validade: Date;
  registro: Date;
  cpfClient: string;
}

const DropdownContract = ({ nomeCliente, validade, registro, cpfClient, id }: PropsDropdown) => {
  const [toggle, setToggle] = useState(false);

  function vencimento(){
    let dateOne = new Date(validade);
    let dateTwo = new Date();
    let timeDiff = Math.abs(dateOne.getTime() - dateTwo.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return diffDays;
  }
  return (
    <div className="dropdownContainer" id={toggle ? "openContract" : ""}>
      <div className="noSelect" onClick={() => setToggle(!toggle)} id="dropdownTitle">
        <label>{nomeCliente}</label>
        <IoMdArrowDropdown size={20} id={toggle ? "icon" : ""} />
      </div>
      <div id={toggle ? "openContract" : ""} className="dropdownBody">
        <div className="details">
          <label>Faltam {vencimento()} dias</label>
        </div>
        <div className="details">
          <label>Número do Registro:</label>
          <label>{id}</label>
        </div>
        <div className="details">
          <label>Data de Registro:</label>
          <label>{new Date(registro).toLocaleDateString()}</label>
        </div>
        <div className="details">
          <label>Data de Validade:</label>
          <label>{new Date(validade).toLocaleDateString()}</label>
        </div>
        <div className="details">
          <label>CPF do Cliente:</label>
          <label>{cpfClient}</label>
        </div>
      </div>
    </div>
  );
};
export default DropdownContract;
