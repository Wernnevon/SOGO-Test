import { useNavigate, Outlet } from "react-router-dom";
import "./styles.css";

const Client = () => {
  const navigate = useNavigate();

  return (
    <div id="clientContainer">
      <h3 id="titleClient">Cliente</h3>
      <div id="menuClient" className="noSelect">
        <label onClick={() => navigate('')} className="menuItemClient">
          Meus Clientes
        </label>
        <label onClick={() => navigate("./register")} className="menuItemClient">
          Novo Cliente
        </label>
      </div>
      <Outlet />
    </div>
  );
};
export default Client;
