import { Link } from "react-router-dom";
import logo from "../../../assets/ootu-logo1.png";
import classes from "./logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={classes["logo"]}>
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
