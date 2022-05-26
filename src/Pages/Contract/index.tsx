import { useNavigate, Outlet } from "react-router-dom";
import './styles.css';

const Contract = ()=>{
  const navigate = useNavigate();
    return(
        <div id="contractContainer">
        <h3 id="titleContract">Contrato</h3>
        <div id="menuContract">
        <label onClick={() => navigate('')} className="menuItemClient">
          Meus Contratos
        </label>
        <label onClick={() => navigate("./register")} className="menuItemClient">
          Novo Contrato
        </label>
      </div>
      <Outlet />
    </div>
    )
}
export default Contract;