import React from "react";
import Navbar from "./Navbar/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  return (
    <>  
      <Sidebar />
      <Navbar />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
