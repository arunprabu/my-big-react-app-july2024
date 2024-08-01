// Fn component with Named function
/*
  blueprint of a fn component 
  1. import (optional)
  2. fn defn 
      must return JSX 
  3. export 
*/
import { useContext } from "react";
import MenuList from "./MenuList";
import { CartContext } from "../contexts/CartContext";

function Header() {
  // Subscribe to the CartContext
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My Big React App!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <MenuList />
          <button className="btn btn-danger">Cart({cartItems?.length})</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
