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
            All
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            Black
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            Blue
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            Red
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            Green
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            White
          </label>
        </div>
      </div>
    </div>
  );
};

export default Colors;
