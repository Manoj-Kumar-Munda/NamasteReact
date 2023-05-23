import { useState } from "react";
import logo from "../Assets/img/food-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>

      <nav className="navbar">
        <ul>
          
            <li className="nav-items">
              <Link to="/">Home</Link>
            </li>
      
            <li className="nav-items">
              <Link to="/about">
                About
              </Link>
            </li>
          
            <li className="nav-items">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-items">
              <Link to="/instamart">Instamart</Link>
            </li>
            <li className="nav-items">Cart</li>
        </ul>
      </nav>
      <div>
        { (isLoggedIn) ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
