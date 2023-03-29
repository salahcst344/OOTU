import NavBar from "../organisms/NavBar";

const Layout = ({ children, navLinks, CTABtn }) => {
  return (
    <>
      <NavBar navLinks={navLinks} CTABtn={CTABtn} />
      {children}
    </>
  );
};

export default Layout;
