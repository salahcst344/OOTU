import NavLinks from "../../molecules/NavLinks";
import Logo from "../../atoms/Logo";
import classes from "./NavBar.module.css";

const NavBar = ({ navLinks }) => {
  return (
    <nav className={classes["main-nav"]}>
      <Logo />
      <NavLinks navLinks={navLinks} />
    </nav>
  );
};

export default NavBar;
