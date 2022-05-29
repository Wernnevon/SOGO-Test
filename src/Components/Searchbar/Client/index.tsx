import { BsSearch } from "react-icons/bs";
import ClientModel from "../../../Model/client";

import "../styles.css";

interface Props {
  list: ClientModel[];
  filter: Function;
}

const SearchbarClient = ({ list, filter }: Props) => {
  const array = list;

  function handleFilter(e: string) {
    filter(
      list.filter((clients)=> e===""? array : clients.nome.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
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
export default SearchbarClient;