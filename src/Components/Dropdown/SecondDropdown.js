import React from 'react';
import {  Link} from "react-router-dom";
import productjson from '../../Products.json';
import './Dropdown.css';
import { useState } from 'react';

function SecondDropdown(props) {
  const [dropdown,setdropdown]=useState(false);

  return (
    <>
    <ul className={(dropdown?'products-submenu-noshow':'products-submenu')} onClick={()=>setdropdown(!dropdown)}>
      {dropdown}{props.showdropdown}
       <li onClick={()=>setdropdown(dropdown)} key='Category'>Products by Category </li>
       <li onClick={()=>setdropdown(dropdown)} key='Brand'>Products by Brand </li>

</ul>
    </>
  );
}

export default SecondDropdown;
