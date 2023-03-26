import NavLink from "../../atoms/NavLink";
import classes from "./NavLinks.module.css";

const NavLinks = ({ navLinks }) => {
  return (
    <ul className={classes["nav-links"]}>
      {navLinks.map((link) => (
        <NavLink link={link} />
      ))}
    </ul>
  );
};

export default NavLinks;
