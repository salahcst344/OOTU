import { motion } from "framer-motion";

const MainBtn = ({ children, href }) => {
  return (
    <motion.a
      className="btn"
      href={href}
      initial={{
        backgroundColor: "var(--primary-shade)",
        color: "var(--white)",
      }}
      whileHover={{
        backgroundColor: "var(--primary-color)",
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.a>
  );
};

export default MainBtn;
