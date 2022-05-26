import { BsSearch } from 'react-icons/bs';

import './styles.css';

const Searchbar = ()=>{
    return(
        <div className='searchbarContainer'>
            <input id='searchInput' type="text" placeholder='Pesquisar...' />
            <BsSearch id='icon'/>
        </div>
    );
}
export default Searchbar