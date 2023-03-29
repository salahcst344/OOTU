import classes from "./MainBtn.module.css";
import { motion } from "framer-motion";

const MainBtn = ({ children }) => {
  return (
    <motion.button
      className={classes["main-btn"]}
      initial={{
        backgroundSize: "200% 200%",
        color: "var(--white)",
      }}
      whileHover={{ backgroundPosition: "100% 100%", color: "var(--black)" }}
      transition={{
        stiffness: "100",
      }}
    >
      {children}
    </motion.button>
  );
};

export default MainBtn;
