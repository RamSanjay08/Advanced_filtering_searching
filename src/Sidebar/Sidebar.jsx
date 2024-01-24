import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Category from "./Category/Category"
import Colors from "./Colors/Colors"
import Prices from "./Prices/Prices"
import "./sidebar.css"

const Sidebar = ({handleChange}) => {
  console.log(handleChange);
  return (
    <div className='sidebar_container'>
      <div className='icon_div'>
        <FaCartShopping className='cart_icon'/>
      </div>
      <div className='sidebar_datas'>
        <Category handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
        <Prices handleChange={handleChange}/>
      </div>
    </div>
  )
}

export default Sidebar