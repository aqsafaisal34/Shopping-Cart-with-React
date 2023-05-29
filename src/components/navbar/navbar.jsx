import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navlinks">
        <Link to="/" id="shop">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
