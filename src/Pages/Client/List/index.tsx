import DropdownClients from "../../../Components/Dropdown/DropdownClients";
import "./styles.css";
import SearchbarClient from "../../../Components/Searchbar/Client";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useState, useEffect } from "react";
import ClientModel from "../../../Model/client";
import ClientApi from "../../../Services/clientsService";

const ListClient = () => {
  const [clients, setClients] = useState<ClientModel[]>([]);
  const [clientList, setClientList] = useState<ClientModel[]>([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    ClientApi.get(`?_page=${actualPage}&_limit=4`).then(({ data,headers }) => {
      setClients(data);
      setClientList(data);
      setTotalPage(Math.ceil(parseInt(headers["x-total-count"])/4))
    });
  }, [actualPage]);

  return (
    <div className="listClientContainer">
      <div className="clientListContent">
        <h2 id="clientListTitle">Todos os Clientes</h2>
        <SearchbarClient filter={setClients} list={clientList} />
        <div className="clientList">
          {clients.map((client) => (
            <DropdownClients
              nome={client.nome}
              dataDeNascimento={client.dataDeNascimento}
              cpf={client.cpf}
              cidade={client.endereco.cidade}
              key={client.cpf}
            />
          ))}
        </div>
        <div className="paginationClient">
        <IoMdArrowDropleft onClick={()=>setActualPage( actualPage<=1 ?1: actualPage-1)} size={20} color="#ED7856" />
          <label className="noSelect">{actualPage} de {totalPage}</label>
          <IoMdArrowDropright onClick={()=>setActualPage( actualPage>=totalPage?totalPage:actualPage+1)} size={20} color="#ED7856" />
        </div>
      </div>
    </div>
  );
};
export default ListClient;
