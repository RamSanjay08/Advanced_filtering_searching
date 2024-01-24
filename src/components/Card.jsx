import { FaStar } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

const Card = ({ id,img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <div className="product_container" key={id}>
        <div className="product-image">
          <img src={img} alt="" />
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
            <FaShoppingBag className="shop_bag" />
          </div>
        </div>
      </div>
      </>
  );
};

export default Card;
