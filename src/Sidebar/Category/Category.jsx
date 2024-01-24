import React from "react";
import "./category.css";

const Category = ({handleChange}) => {
  return (
    <div className="category_container">
      <h3>Category</h3>
      <div className="checkbox_container">
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" onChange={handleChange} value="" />{" "}
            All
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" onChange={handleChange} value=""/>{" "}
            Sneakers
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" onChange={handleChange} value=""/>{" "}
            Flats
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" onChange={handleChange} value=""/>{" "}
            Sandals
          </label>
        </div>
        <div className="label_container">
          <label className="category_label">
            <input type="radio" name="test" className="category_input" onChange={handleChange} value=""/>{" "}
            Heels
          </label>
        </div>
      </div>
    </div>
  );
};

export default Category;
