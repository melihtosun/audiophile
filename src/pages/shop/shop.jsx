import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/logo/black-logo.png'

export const Shop = () => {
  return (
    <div>
      <div>
        <div className="grow d-none d-sm-block">
          <img src={logo} alt="Logo" className="logo-title" />
        </div>

        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} className="grid-item"/>
          ))}
        </div>
      </div>
    </div>
  );
};
