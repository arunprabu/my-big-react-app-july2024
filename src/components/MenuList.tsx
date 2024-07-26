// Fn Components with Arrow function

import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/netflix">
          Netflix
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/user-manager">
          User Manager App
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/products">
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/todos">
          Todos
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact-us">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default MenuList;