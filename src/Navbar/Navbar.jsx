import React from 'react'
import "./Navbar.css"
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className='input-container'>
        <input type="text" placeholder='Enter your Search Shoes' />
      </div>
      <div className='nav-icons'>
        <FaRegHeart />
        <IoCartOutline />
        <FaRegUser />
      </div>
    </nav>
  )
}

export default Navbar