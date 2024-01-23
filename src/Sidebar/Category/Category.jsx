import React from "react";
import "./category.css";

const Category = () => {
  return (
    <div className="category_container">
      <h3>Category</h3>
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
            <span>Sneakers</span>
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            <span>Flats</span>
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            <span>Sandals</span>
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" />{" "}
            <span>Heels</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Category;
