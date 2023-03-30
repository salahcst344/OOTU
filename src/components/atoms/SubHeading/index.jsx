import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const SubHeading = ({ children, styles }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const transition = {
    type: "spring",
    bounce: 0.25,
    duration: 2,
  };

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        {
          translateY: 0,
          opacity: 1,
        },
        transition
      );
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
        translateY: "-150%",
        opacity: 0,
      }}
    >
      {children}
    </motion.span>
  );
};

export default SubHeading;
