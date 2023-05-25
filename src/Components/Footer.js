import { useContext } from "react";
import UserContext from "./utils/UserContext";

const Footer = () => {
  const {user} = useContext(UserContext);
    return <h2>This site is developed by {user.name}</h2>;
  };

export default Footer;