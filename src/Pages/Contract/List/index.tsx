import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import SearchbarContract from "../../../Components/Searchbar/Contract";
import "./styles.css";
import DropdownContract from "../../../Components/Dropdown/DropdownContract";
import { useEffect, useState } from "react";
import ContractModel from "../../../Model/contract";
import ContractApi from "../../../Services/contractService";

const ListContract = () => {
  const [contracts, setContracts] = useState<ContractModel[]>([]);
  const [contractList, setContractList] = useState<ContractModel[]>([]);
  const [allContract, setAllContractList] = useState<ContractModel[]>([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [select, setSelect] = useState(0);
  const [limitPages, setLimitPages] = useState(1);

  useEffect(() => {
    ContractApi.get(`?_page=${actualPage}&_limit=3`).then(
      ({ data, headers }) => {
        setContracts(data);
        setContractList(data);
        setTotalPage(Math.ceil(parseInt(headers["x-total-count"]) / 3));
        setLimitPages(Math.ceil(parseInt(headers["x-total-count"]) / 3));
      }
    );
  }, [actualPage]);
  useEffect(() => {
    ContractApi.get("").then(({ data, headers }) => {
      setAllContractList(data);
    });
  }, [select]);

  function vencimento(validade: Date) {
    let dateOne = new Date(validade);
    let dateTwo = new Date();
    let timeDiff = Math.abs(dateOne.getTime() - dateTwo.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }

  function handleSelect(option: number) {
    setContracts(contractList);
    setTotalPage(limitPages);
    if (select === option) {
      setSelect(0);
    } else {
      setSelect(option);
      switch (option) {
        case 1:
          setContracts(
            allContract.filter((contract) => vencimento(contract.validade) <= 1)
          );
          break;
        case 7:
          setContracts(
            allContract.filter(
              (contract) =>
                vencimento(contract.validade) > 1 &&
                vencimento(contract.validade) <= 7
            )
          );
          break;
        case 15:
          setContracts(
            allContract.filter(
              (contract) =>
                vencimento(contract.validade) > 7 &&
                vencimento(contract.validade) <= 15
            )
          );
          break;
        case 30:
          setContracts(
            allContract.filter(
              (contract) =>
                vencimento(contract.validade) > 15 &&
                vencimento(contract.validade) <= 30
            )
          );
          break;

        default:
          break;
      }
      setTotalPage(Math.ceil(contracts.length / 3));
    }
  }

  function next() {
    setActualPage(actualPage >= totalPage ? totalPage : actualPage + 1);
  }
  function prev() {
    setActualPage(actualPage <= 1 ? 1 : actualPage - 1);
  }

  return (
    <div className="listContractContainer">
      <div className="contractListContent">
        <h2 id="contractListTitle">Todos os Contratos</h2>
        <SearchbarContract filter={setContracts} list={contractList} />
        <div className="clientList">
          <div className="filtros noSelect">
            <label>Filtros:</label>
            <label
              onClick={() => handleSelect(1)}
              id={select === 1 ? "selected" : ""}
            >
              Hoje
            </label>
            <label
              onClick={() => handleSelect(7)}
              id={select === 7 ? "selected" : ""}
            >
              07 dias
            </label>
            <label
              onClick={() => handleSelect(15)}
              id={select === 15 ? "selected" : ""}
            >
              15 dias
            </label>
            <label
              onClick={() => handleSelect(30)}
              id={select === 30 ? "selected" : ""}
            >
              30 dias
            </label>
          </div>
          {contracts.map((contract) => (
            <DropdownContract
              cpfClient={contract.pessoaCPF}
              nomeCliente={contract.nomeCliente}
              registro={contract.dataDeRegistro}
              validade={contract.validade}
              id={contract.id}
              key={contract.id}
            />
          ))}
        </div>
        <div className="paginationContract">
          <IoMdArrowDropleft onClick={prev} size={20} color="#ED7856" />
          <label className="noSelect">
            Página {actualPage > totalPage ? 1 : actualPage}
          </label>
          <IoMdArrowDropright onClick={next} size={20} color="#ED7856" />
        </div>
      </div>
    </div>
  );
};
export default ListContract;
