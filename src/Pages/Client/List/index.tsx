import Dropdown from "../../../Components/Dropdown";
import "./styles.css";
import Searchbar from "../../../Components/Searchbar";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const ListClient = () => {
  return (
    <div className="listClientContainer">
      <div className="clientListContent">
        <h2 id="clientListTitle">Todos</h2>
        <Searchbar />
        <div className="clientList">
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>
        <div className="pagination">
          <IoMdArrowDropleft size={20} color="#ED7856" />
          <label>1 de 10</label>
          <IoMdArrowDropright size={20} color="#ED7856" />
        </div>
      </div>
      <div>
        <h2>Recentes</h2>
        <div className="clientList">
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
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
export default ListClient;
