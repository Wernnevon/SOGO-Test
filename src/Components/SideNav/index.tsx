import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

const SideNav = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const [nav, setNav] = useState(pathname.split('/')[1]);
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
          id={pathname.split('/')[1] === "client" ? "active" : ""}
          className="link"
          onClick={() => handleNavigation("client")}
        >
          Clientes
        </label>
        <label
          id={pathname.split('/')[1] === "contract" ? "active" : ""}
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
