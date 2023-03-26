import React from "react";
import NavBar from "../../organisms/NavBar";

const Layout = ({ children, navLinks }) => {
  return (
    <>
      <NavBar navLinks={navLinks} />
      {children}
    </>
  );
};

export default Layout;
