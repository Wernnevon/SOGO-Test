import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Searchbar from "../../../Components/Searchbar";
import "./styles.css";
import Dropdown from "../../../Components/Dropdown";

const ListContract = () => {
  return (
    <div className="listContractContainer">
      <div className="contractListContent">
        <h2 id="contractListTitle">Todos</h2>
        {/* <Searchbar /> */}
        <div className="clientList">
          <label id="filtros">Filtro</label>
          {/* <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown /> */}
        </div>
        <div className="pagination">
          <IoMdArrowDropleft size={20} color="#ED7856" />
          <label>1 de 10</label>
          <IoMdArrowDropright size={20} color="#ED7856" />
        </div>
      </div>
    </div>
  );
};
export default ListContract;
