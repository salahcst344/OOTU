import Layout from "../components/templates/Layout";

const PageLayout = ({ children }) => {
  const navLinks = [
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
  const CTABtn = {
    text: "services",
    path: "/services",
  };

  return (
    <Layout navLinks={navLinks} CTABtn={CTABtn}>
      {children}
    </Layout>
  );
};

export default PageLayout;
