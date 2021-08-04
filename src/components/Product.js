import React from "react";
import "../styles/Product.css";
import Button from "@material-ui/core/Button";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, image, price, rating }) => {

  const [{ basket } , dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'Add_To_Basket',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

  return (
    <div className="product">

      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <Button onClick={addToBasket} variant="contained" className="Button">
        Add to Cart
      </Button>
      
    </div>
  );
}; 

export default Product;
