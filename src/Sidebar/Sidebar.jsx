import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Category from "./Category/Category"
import Colors from "./Colors/Colors"
import Prices from "./Prices/Prices"
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar_container'>
      <div className='icon_div'>
        <FaCartShopping className='cart_icon'/>
      </div>
      <div className='sidebar_datas'>
        <Category />
        <Colors />
        <Prices />
      </div>
    </div>
  )
}

export default Sidebar