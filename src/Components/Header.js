import { useState, useContext } from "react";
import logo from "../Assets/img/food-logo.png";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={logo} className="w-24 h-24" alt="logo" />
      </div>

      <nav>
        <ul className="flex space-x-6">
          
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
        <span className="mx-2">{user.name}</span>
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
