import NavLinks from "../../molecules/NavLinks";
import Logo from "../../atoms/Logo";
import classes from "./NavBar.module.css";

const NavBar = ({ navLinks, CTABtn }) => {
  return (
    <nav className={classes["main-nav"]}>
      <Logo />
      <NavLinks navLinks={navLinks} CTABtn={CTABtn} />
    </nav>
  );
};

export default NavBar;
