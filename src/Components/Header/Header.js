import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "reactstrap";
import { useStateValue } from "../../StateProvider";
import Login from "../../Pages/Authentication/Login";
import { auth } from "../../firebase";
const Header = () => {

  const handleAuthentication = () =>{
    if (user){
      auth.signOut();
    }
  }

  const [{basket,user},dispatch] =useStateValue();
  const basketLength =basket.map((items) =>items.quantity).reduce((a,b) => a+b,0);
  return (
    <nav className="mainHeader">
      <div className="logoHeader">
        <Link to="/">
          <h1 className="logoText">P0W</h1>
        </Link>
      </div>

      <div className="header-right">
        {/* <Button color="primary" className="btn-Header">
          Sign In
        </Button> */}
        {user ? (
          <Button color="primary" onClick={handleAuthentication}>
            Sign Out
          </Button>
        ) : (
          <div className="header__auth">
            <Login />
            <Link to="/register">
              <Button className="btn-Header">
                Register
              </Button>
            </Link>
          </div>
        )}

        <Link to="/checkout">
          <ShoppingCartIcon className="cart-icon" />
          <span className="cart-quantity">{basketLength}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
