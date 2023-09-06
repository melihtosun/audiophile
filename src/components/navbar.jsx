import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Storefront, Headset } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar1">
      <div className="links">
        <Link to="/" className="button-28">
          <Storefront size={32} />
        </Link>
        <Link to="/cart" className="button-28">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/contact" className="button-28">
          <Headset size={32} />
        </Link>
      </div>
    </div>
  );
};
