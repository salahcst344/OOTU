import Layout from "../components/templates/Layout";

const PageLayout = ({ children }) => {
  const navLinks = [
    {
      text: "services",
      path: "/services",
    },
    {
      text: "pricing",
      path: "/pricing",
    },
    {
      text: "about us",
      path: "/about-us",
    },
    {
      text: "portfolio",
      path: "/portfolio",
    },
    {
      text: "blog",
      path: "/blog",
    },
  ];

  return <Layout navLinks={navLinks}>{children}</Layout>;
};

export default PageLayout;
