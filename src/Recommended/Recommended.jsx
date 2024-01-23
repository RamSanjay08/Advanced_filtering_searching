import React from "react";
import "./Recommended.css"

const Recommended = () => {
  return (
    <div className="recommended-container">
      <h2>Recommended</h2>
      <div className="products_filter">
        <button className="btns">All Products</button>
        <button className="btns">Nike</button>
        <button className="btns">Adidas</button>
        <button className="btns">Puma</button>
        <button className="btns">Vans</button>
      </div>
    </div>
  );
};

export default Recommended;
