import "./styles.css";

const Dashboard = () => {
  return (
    <div id="dashboardContainer">
      <h3 id="titleDashboard">Dashboard</h3>
      <div id="menuDashboard" />
      <div className="dashboardCardContainer">
        <div className="card">
          <label className="labelCard">Total de Contratos:</label>
          <label className="labelCard">153</label>
        </div>
        <div className="card">          
          <label className="labelCard">Contratos a vencer:</label>
          <label className="labelCard">53</label>
        </div>
        <div className="card">
          <label className="labelCard">Duração Média:</label>
          <label className="labelCard">3 meses</label>
        </div>
      </div>
      <div className="dashboardContent">
        <label>Graficos</label>
      </div>
    </div>
  );
};
export default Dashboard;
