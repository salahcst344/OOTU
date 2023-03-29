import MainBtn from "../../atoms/MainBtn";
import NavLink from "../../atoms/NavLink";
import classes from "./NavLinks.module.css";

const NavLinks = ({ navLinks, CTABtn }) => {
  return (
    <ul className={classes["nav-links"]}>
      {navLinks.map((link) => (
        <NavLink key={link.path} link={link} />
      ))}
      <NavLink
        link={{
          path: CTABtn.path,
          text: <MainBtn>{CTABtn.text}</MainBtn>,
        }}
      />
    </ul>
  );
};

export default NavLinks;
