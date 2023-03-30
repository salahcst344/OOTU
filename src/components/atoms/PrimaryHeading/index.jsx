import { motion } from "framer-motion";

const PrimaryHeading = ({ children, styles }) => {
  return (
    <motion.h1
      style={{
        fontSize: "5.2rem",
        lineHeight: 1.05,
        marginBottom: "3.2rem",
        ...styles,
      }}
      initial={{
        translateX: "-40%",
        opacity: 0,
      }}
      animate={{
        translateX: 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
      }}
    >
      {children}
    </motion.h1>
  );
};

export default PrimaryHeading;
