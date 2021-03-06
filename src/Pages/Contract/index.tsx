import { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import "./styles.css";

const Contract = () => {
  const {pathname} = useLocation();
  const [menuNav, setMenuNav] = useState(pathname.split('/')[2]);
  const navigate = useNavigate();

  function handleNavigation(to: string) {
    setMenuNav(to);
    navigate(to);
  }
  return (
    <div id="contractContainer">
      <h3 id="titleContract">Contrato</h3>
      <div id="menuContract">
        <label
          id={!menuNav ? "activeContractMenu" : ""}
          onClick={() => handleNavigation("")}
          className="menuItemClient"
        >
          Meus Contratos
        </label>
        <label
          id={menuNav === "register" ? "activeContractMenu" : ""}
          onClick={() => handleNavigation("register")}
          className="menuItemClient"
        >
          Novo Contrato
        </label>
      </div>
      <Outlet />
    </div>
  );
};
export default Contract;
