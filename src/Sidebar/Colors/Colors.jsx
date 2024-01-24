import React from "react";
import "../Category/category.css";

const Colors = () => {
  return (
    <div className="category_container">
      <h3>Colors</h3>
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
            <span>Black</span>
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            <span>Blue</span>
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            <span>Red</span>
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            <span>Green</span>
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            <span>White</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Colors;
