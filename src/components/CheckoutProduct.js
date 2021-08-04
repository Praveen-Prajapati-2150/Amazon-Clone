import React from "react";
import Button from "@material-ui/core/Button";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {

  const [{basket}, dispatch] = useStateValue();

  const removeToBasket = () => {
    // remove item from basket..
    dispatch({
      type: "Remove_From_Basket",
      id: id,
    })

  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <Button
          onClick={removeToBasket}
          variant="contained"
          className="Button"
          
        >
          Remove Item
        </Button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
