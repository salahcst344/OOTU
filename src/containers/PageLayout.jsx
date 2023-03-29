import Layout from "../components/templates/Layout";
import { EMAIL, TEL } from "../config/contactInfo";
import { ReactComponent as MailIcon } from "../assets/Icons/mail.svg";
import { ReactComponent as PhoneIcon } from "../assets/Icons/phone.svg";

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
  const contactInfo = [
    {
      path: `mailto:${EMAIL}`,
      icon: <MailIcon />,
    },
    {
      path: `tel:${TEL}`,
      icon: <PhoneIcon />,
    },
  ];

  return (
    <Layout navLinks={navLinks} CTABtn={CTABtn} contactInfo={contactInfo}>
      {children}
    </Layout>
  );
};

export default PageLayout;
