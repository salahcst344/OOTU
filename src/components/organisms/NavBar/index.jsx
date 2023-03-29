import NavLinks from "../../molecules/NavLinks";
import Logo from "../../atoms/Logo";
import classes from "./NavBar.module.css";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const NavBar = ({ navLinks, CTABtn }) => {
  const { scrollY } = useScroll();
  const [YLength, setYLength] = useState(scrollY);
  useMotionValueEvent(scrollY, "change", (newValue) => setYLength(newValue));

  return (
    <nav
      className={`${classes["main-nav"]} ${
        YLength > 200 ? classes.sticky : ""
      }`}
    >
      <Logo />
      <NavLinks navLinks={navLinks} CTABtn={CTABtn} />
    </nav>
  );
};

export default NavBar;
