import logo from "../Assets/img/food-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} className="logo" alt = "logo"/>
      </div>

      <nav className="navbar">
        <ul>
          <li className="nav-items">Home</li>
          <li className="nav-items">About</li>
          <li className="nav-items">Contact</li>
          <li className="nav-items">Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;