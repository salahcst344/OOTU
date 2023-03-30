import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const SubHeading = ({ children, styles }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(scope.current, {
        translateY: 0,
        opacity: 1,
      });
    } else {
      animate(scope.current, {
        translateY: "-150%",
        opacity: 0,
      });
    } // eslint-disable-next-line
  }, [isInView]);
  return (
    <motion.span
      ref={scope}
      style={{
        display: "block",
        fontSize: "1.8rem",
        fontWeight: 500,
        color: "var(--primary-shade)",
        textTransform: "uppercase",
        marginBottom: "1.6rem",
        letterSpacing: "0.75px",
        ...styles,
      }}
      initial={{
        translateY: "-250%",
        opacity: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 70,
        bounce: 0.5,
      }}
    >
      {children}
    </motion.span>
  );
};

export default SubHeading;
