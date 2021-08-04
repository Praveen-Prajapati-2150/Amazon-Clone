import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "../StateProvider";
import { auth } from "./Firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log(basket);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HU4Gu-b_CtjPRqbjIZ6DeFcAoH-EFypP0JzKc6MhZv1p_hJqS3XxEbE1DhMv9MIWcEI&usqp=CAU"
          alt=""
          srcset=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__links">

        <Link to={!user && "/login"}>
          <div onClick={login} className="header__option">
            <span className="upperFont">Hello, {user?.email}</span>
            <span className="lowerFont">{user ? 'Sign Out' : 'Sign in'}</span>
          </div>
        </Link>

        <Link to="/">
          <div className="header__option">
            <span className="upperFont">Returns</span>
            <span className="lowerFont">& Orders</span>
          </div>
        </Link>

        <Link to="/">
          <div className="header__option">
            <span className="upperFont">Your</span>
            <span className="lowerFont">Prime</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__option" id="cart">
            <AddShoppingCartIcon className="cart"/>
            <span>{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
