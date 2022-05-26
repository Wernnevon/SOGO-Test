import Dropdown from "../../../Components/Dropdown";
import "./styles.css";
import Searchbar from "../../../Components/Searchbar";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useState, useEffect } from "react";
import ClientModel from "../../../Model/client";
import ClientApi from "../../../Services/clientsService";

const ListClient = () => {
  const [clients, setClients] = useState<ClientModel[]>([]);
  const [clientList, setClientList] = useState<ClientModel[]>([])

  useEffect(() => {
    ClientApi.get("/pessoas").then(({ data }) => {
      setClients(data);
      setClientList(data);
    });
  }, []);

  return (
    <div className="listClientContainer">
      <div className="clientListContent">
        <h2 id="clientListTitle">Todos</h2>
        <Searchbar filter={setClients} list={clientList} />
        <div className="clientList">
          {clients.map((client) => (
            <Dropdown
              nome={client.nome}
              dataDeNascimento={client.dataDeNascimento}
              cpf={client.cpf}
              cidade={client.endereco.cidade}
              key={client.cpf}
            />
          ))}
        </div>
        <div className="pagination">
          <IoMdArrowDropleft size={20} color="#ED7856" />
          <label>1 de {(clients.length/4)}</label>
          <IoMdArrowDropright size={20} color="#ED7856" />
        </div>
      </div>
      <div>
        <h2>Recentes</h2>
        <div className="clientList">
          {clientList.map((client) => (
            <Dropdown
              nome={client.nome}
              dataDeNascimento={client.dataDeNascimento}
              cpf={client.cpf}
              cidade={client.endereco.cidade}
              key={client.cpf}
            />
          ))}
        </div>
        <div className="pagination">
          <IoMdArrowDropleft size={20} color="#ED7856" />
          <label>1 de {(clients.length/4)}</label>
          <IoMdArrowDropright size={20} color="#ED7856" />
        </div>
      </div>
    </div>
  );
};
export default ListClient;
