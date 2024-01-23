import React from 'react'
import Navbar from './Navbar/Navbar'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'

const App = () => {
  return (
    <>
      <Navbar />
      <Recommended />
      <Products />
    </>
  )
}

export default App