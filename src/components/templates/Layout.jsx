import FAButtonStack from "../molecules/FAButtonStack";
import NavBar from "../organisms/NavBar";

const Layout = ({ children, navLinks, CTABtn, contactInfo }) => {
  return (
    <>
      <NavBar navLinks={navLinks} CTABtn={CTABtn} />
      <FAButtonStack contactInfo={contactInfo} />
      {children}
    </>
  );
};

export default Layout;
