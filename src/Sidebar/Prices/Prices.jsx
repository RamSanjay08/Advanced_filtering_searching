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
            <span>All</span>
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            <span>$0 - 50</span>
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            <span>$50 - 100</span>
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            <span>$100 - 150</span>
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            <span>Over - $150</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Prices;
