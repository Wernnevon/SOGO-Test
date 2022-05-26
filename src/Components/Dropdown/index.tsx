import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./styles.css";

interface PropsDropdown {
  nome: string;
  cpf: string;
  dataDeNascimento: Date;
  cidade: string;
}

const Dropdown = ({ nome, cpf, dataDeNascimento, cidade }: PropsDropdown) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="dropdownContainer" id={toggle ? "open" : ""}>
      <div className="noSelect" onClick={() => setToggle(!toggle)} id="dropdownTitle">
        <label>{nome}</label>
        <IoMdArrowDropdown size={20} id={toggle ? "icon" : ""} />
      </div>
      <div id={toggle ? "open" : ""} className="dropdownBody">
        <div className="details">
          <label>CPF</label>
          <label>{cpf}</label>
        </div>
        <div className="details">
          <label>Nascimento</label>
          <label>{dataDeNascimento.toString()}</label>
        </div>
        <div className="details">
          <label>Cidade</label>
          <label>{cidade}</label>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
