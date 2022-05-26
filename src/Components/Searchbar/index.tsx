/* eslint-disable array-callback-return */
import { BsSearch } from "react-icons/bs";
import ClientModel from "../../Model/client";

import "./styles.css";

interface Props {
  list: ClientModel[];
  filter: Function;
}

const Searchbar = ({ list, filter }: Props) => {
  const array = list;

  function handleFilter(e: string) {
    filter(
      list.filter((clients)=>{
        if (e === "") return array;
        else if (
          clients.nome.toLocaleLowerCase().includes(e.toLocaleLowerCase())
        )
          return clients;
      })
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
export default Searchbar;
