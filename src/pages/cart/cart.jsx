import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="mt-5">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="text-center"><strong>Subtotal: ${totalAmount} </strong></p>
          <button className="btn btn-danger" onClick={() => navigate("/")}> Back to Shop </button>
          <button className="btn btn-success"
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <div className="">
          <div>
          <h1 className="text-danger"> Your shopping cart is empty!</h1>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
          <button className="btn btn-danger" onClick={() => navigate("/")}> Back to Shop </button>
          </div>
        </div>
      )}
    </div>
  );
};
