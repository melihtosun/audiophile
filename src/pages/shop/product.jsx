import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="card">
      <img className="card-img-top" src={productImage} />
      <div className="card-body text-center">
        <h5>
          <b>{productName}</b>
        </h5>
        <p className="display-5"> ${price}</p>
      </div>
      <button className="btn btn-dark mb-4" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

// return (
//   <div className="product">
//     <img src={productImage} />
//     <div className="description">
//       <p>
//         <b>{productName}</b>
//       </p>
//       <p> ${price}</p>
//     </div>
//     <button className="addToCartBttn" onClick={() => addToCart(id)}>
//       Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
//     </button>
//   </div>
// );


