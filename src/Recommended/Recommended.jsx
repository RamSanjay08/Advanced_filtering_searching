import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="recommended-container">
        <h2>Recommended</h2>
        <div className="products_filter">
          <Button className='btns' onClickHandler={handleClick} value="" title="All Products" />
          <Button className='btns' onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button className='btns' onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button className='btns' onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button className='btns' onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;