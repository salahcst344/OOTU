import NavLinks from "../../molecules/NavLinks";
import Logo from "../../atoms/Logo";
import classes from "./NavBar.module.css";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useState } from "react";

const NavBar = ({ navLinks, CTABtn }) => {
  const { scrollY } = useScroll();
  const [YLength, setYLength] = useState(scrollY);
  useMotionValueEvent(scrollY, "change", (newValue) => setYLength(newValue));

  return (
    <motion.nav
      className={`${classes["main-nav"]} ${
        YLength > 400 ? classes.sticky : ""
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.3,
      }}
    >
      <Logo />
      <NavLinks navLinks={navLinks} CTABtn={CTABtn} />
    </motion.nav>
  );
};

export default NavBar;
