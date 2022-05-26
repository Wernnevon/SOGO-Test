import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./styles.css";

const Client = () => {
  const [menuNav, setMenuNav] = useState("");
  const navigate = useNavigate();

  function handleNavigation(to: string) {
    setMenuNav(to);
    navigate(to);
  }

  return (
    <div id="clientContainer">
      <h3 id="titleClient">Cliente</h3>
      <div id="menuClient" className="noSelect">
        <label
          id={menuNav === "" ? "activeClientMenu" : ""}
          onClick={() => handleNavigation("")}
          className="menuItemClient"
        >
          Meus Clientes
        </label>
        <label
          id={menuNav === "register" ? "activeClientMenu" : ""}
          onClick={() => handleNavigation("register")}
          className="menuItemClient"
        >
          Novo Cliente
        </label>
      </div>
      <Outlet />
    </div>
  );
};
export default Client;
