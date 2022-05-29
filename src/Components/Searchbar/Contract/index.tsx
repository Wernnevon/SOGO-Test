import { BsSearch } from "react-icons/bs";
import ContractModel from "../../../Model/contract";

import "../styles.css";

interface Props {
  list: ContractModel[];
  filter: Function;
}

const SearchbarContract = ({ list, filter }: Props) => {
  const array = list;

  function handleFilter(e: string) {
    filter(
      list.filter((contracts)=> e===""?array:contracts.nomeCliente.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
    );
  }
  return (
    <div className="searchbarContainer">
      <input
        id="searchInput"
        type="text"
        onChange={(event: any) => handleFilter(event.target.value)}
        placeholder="Pesquisar..."
      />
      <BsSearch id="searchIcon" />
    </div>
  );
};
export default SearchbarContract;