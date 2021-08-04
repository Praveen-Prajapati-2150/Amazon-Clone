import React from "react";
import "../styles/Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__top">
        <div className="checkout__ad">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Flip/Super_Sale_Herofader_Aug21/Heros/PC-1500x600._CB645344605_.jpg"
            alt="no never"
          />
        </div>

        {basket.length > 0 && (
          <div className="checkout__right">
            {/* <h2>Subtotal</h2> */}
            <Subtotal />
          </div>
        )}
      </div>

      <div className="checkout__list">
        {basket?.length === 0 ? (
          <div>
            <h2>your shopping basket it empty</h2>
          </div>
        ) : (
          <div>
            <h2>your shopping basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
