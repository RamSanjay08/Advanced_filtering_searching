import React from "react";
import "../Category/category.css";

const Prices = () => {
  return (
    <div className="category_container">
      <h3>Prices</h3>
      <div className="checkbox_container">
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            All
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            $0 - 50
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            $50 - 100
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            $100 - 150
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            Over - $150
          </label>
        </div>
      </div>
    </div>
  );
};

export default Prices;
