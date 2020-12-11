import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "reactstrap";
import { useStateValue } from "../../StateProvider";
const Header = () => {

  const [{basket},dispatch] =useStateValue();

  return (
    <nav className="mainHeader">
      <div className="logoHeader">
        <Link to="/">
          <h1 className="logoText">P0W</h1>
        </Link>
      </div>

      <div className="header-right">
        <Button color="primary" className="btn-Header">
          Sign In
        </Button>
        <Button color="primary" className="btn-Header">
          Register
        </Button>
        <Link to="/checkout">
          <ShoppingCartIcon className="cart-icon" />
          <span className="cart-quantity">{basket?.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
