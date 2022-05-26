import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

const SideNav = () => {
  const [nav, setNav] = useState("");
  const navigate = useNavigate();
  function handleNavigation(to: string) {
    setNav(to);
    navigate(to);
  }

  return (
    <div className="sideContainer">
      <div id="logo" className="noSelect">
        <span>TH</span>
      </div>
      <div id="menu" className="noSelect">
        <label
          id={nav === "" ? "active" : ""}
          className="link"
          onClick={() => handleNavigation("")}
        >
          Dashboard
        </label>
        <label
          id={nav === "client" ? "active" : ""}
          className="link"
          onClick={() => handleNavigation("client")}
        >
          Clientes
        </label>
        <label
          id={nav === "contract" ? "active" : ""}
          className="link"
          onClick={() => handleNavigation("contract")}
        >
          Contratos
        </label>
      </div>
    </div>
  );
};
export default SideNav;
