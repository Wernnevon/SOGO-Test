import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "../styles.css";

interface PropsDropdown {
  nome: string;
  cpf: string;
  dataDeNascimento: Date;
  cidade: string;
}

const DropdownClients = ({ nome, cpf, dataDeNascimento, cidade }: PropsDropdown) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="dropdownContainer" id={toggle ? "openClient" : ""}>
      <div className="noSelect" onClick={() => setToggle(!toggle)} id="dropdownTitle">
        <label>{nome}</label>
        <IoMdArrowDropdown size={20} id={toggle ? "icon" : ""} />
      </div>
      <div id={toggle ? "openClient" : ""} className="dropdownBody">
        <div className="details">
          <label>CPF</label>
          <label>{cpf}</label>
        </div>
        <div className="details">
          <label>Nascimento</label>
          <label>{new Date(dataDeNascimento).toLocaleDateString()}</label>
        </div>
        <div className="details">
          <label>Cidade</label>
          <label>{cidade}</label>
        </div>
      </div>
    </div>
  );
};
export default DropdownClients;
