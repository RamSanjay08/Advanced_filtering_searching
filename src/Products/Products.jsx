import React from "react";
import "./Products.css";
import { FaStar } from "react-icons/fa6";
import Data from "../data/data";
import { FaShoppingBag } from "react-icons/fa";

const Products = () => {
  return (
    <section>
      {Data.map(({img,star,reviews,title,prevPrice,newPrice,color,company,category},index) => {
        return (
          <div className="product_container" key={index}>
            <div className="product-image">
            <img
              src={img}
              alt=""
            />
            </div>
            <div className="product-contents">
              <h3>{title}</h3>

              <div className="start-icons">
                <FaStar className="icons1" />
                <FaStar className="icons1" />
                <FaStar className="icons1" />
                <FaStar className="icons1" />
                <span> {reviews}</span>
              </div>
              <div className="price-tags">
                <p>
                  <span>{prevPrice}</span> {newPrice}
                </p>
                <FaShoppingBag />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Products;
