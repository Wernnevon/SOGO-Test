/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import ContractModel from "../../Model/contract";
import ContractApi from "../../Services/contractService";
import "./styles.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const Dashboard = () => {
  const [totalContratos, setTotalContratos] = useState(0);
  const [contratosVencer, setContratosVencer] = useState(0);
  const [duracao, setDuracao] = useState(0);

  const labels = [
    "Total de Contratos",
    "Contratos a vencer",
    "Contratos Vencidos",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Contratos",
        data: [
          totalContratos,
          totalContratos - contratosVencer,
          contratosVencer,
        ],
        backgroundColor: "#ED7856",
      },
    ],
  };

  function duracaoContrato(validade: Date, registro: Date) {
    let dateOne = new Date(validade);
    let dateTwo = new Date(registro);
    let timeDiff = Math.abs(dateOne.getTime() - dateTwo.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }
  useEffect(() => {
    let today = new Date();
    today.setDate(today.getDate())
    ContractApi.get("").then(({ data }) => {
      setTotalContratos(data.length);
      let duracaoMedia = 0;
      let vencendo = 0;
      data.map((item: ContractModel) => {
        duracaoMedia =
          duracaoMedia + duracaoContrato(item.validade, item.dataDeRegistro);
        if (new Date(item.validade)>=today) {
          vencendo = vencendo + 1;
        }
      });
      setContratosVencer(vencendo);
      setDuracao(duracaoMedia / data.length);
    });
  }, []);

  return (
    <div id="dashboardContainer">
      <h3 id="titleDashboard">Dashboard</h3>
      <div id="menuDashboard" />
      <div className="dashboardCardContainer">
        <div className="card">
          <label className="labelCard">Total de Contratos:</label>
          <label className="labelCard">{totalContratos}</label>
        </div>
        <div className="card">
          <label className="labelCard">Contratos a vencer:</label>
          <label className="labelCard">{contratosVencer}</label>
        </div>
        <div className="card">
          <label className="labelCard">Duração Média:</label>
          <label className="labelCard">{Math.floor(duracao)} dias</label>
        </div>
      </div>
      <div className="chart">
        <div>
        <Bar height={150} options={options} data={data} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
