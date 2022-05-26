import { useState } from "react";
import { IoMdArrowDropdown } from 'react-icons/io';
import "./styles.css";

const Dropdown = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='dropdownContainer noSelect' id={toggle?'open': ''}>
      <div onClick={()=> setToggle(!toggle)} id="dropdownTitle">
        <label>Dropdown title</label>
        <div className="titleDetails">
          <label>Há 5 dias</label>
        <IoMdArrowDropdown size={20} id={toggle?'icon': ''}/>
        </div>
      </div>
      <div id={toggle?'open': ''} className="dropdownBody">
        <label>Lorem Ipsum</label>
        <label>Lorem Ipsum</label>
        <label>Lorem Ipsum</label>
        <label>Lorem Ipsum</label>
      </div>
    </div>
  );
};
export default Dropdown;
