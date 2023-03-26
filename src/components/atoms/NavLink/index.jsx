import { NavLink } from "react-router-dom";
import classes from "./navLink.module.css";

const index = ({ link }) => {
  return (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        `${classes["main-nav-link"]} link ${isActive ? classes["active"] : ""}`
      }
    >
      {link.text}
    </NavLink>
  );
};

export default index;
