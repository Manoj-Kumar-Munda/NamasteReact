import { useState } from "react";
import logo from "../Assets/img/food-logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>

      <nav className="navbar">
        <ul>
          <li className="nav-items">Home</li>
          <li className="nav-items">About</li>
          <li className="nav-items">Contact</li>
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
