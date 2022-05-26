import "./styles.css";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();

  return (
    <div className="sideContainer">
      <div id="logo" className="noSelect">
        <span>TH</span>
      </div>
      <div id="menu" className="noSelect">
        <label className="link" onClick={()=>navigate('dashboard')}>Dashboard</label>
        <label className="link" onClick={()=>navigate('client')}>Clientes</label>
        <label className="link" onClick={()=>navigate('contract')}>Contratos</label>
      </div>
    </div>
  );
};
export default SideNav;
