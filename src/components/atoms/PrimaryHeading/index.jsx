import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const PrimaryHeading = ({ children, styles, once }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once });
  const transition = {
    type: "spring",
    bounce: 0.25,
  };

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        {
          translateX: 0,
          opacity: 1,
        },
        transition
      );
    } else {
      animate(
        scope.current,
        {
          translateX: "-60%",
          opacity: 0,
        },
        transition
      );
    } // eslint-disable-next-line
  }, [isInView]);

  return (
    <motion.h1
      ref={scope}
      style={{
        fontSize: "5.2rem",
        lineHeight: 1.05,
        marginBottom: "3.2rem",
        ...styles,
      }}
      initial={{
        translateX: "-60%",
        opacity: 0,
      }}
    >
      {children}
    </motion.h1>
  );
};

export default PrimaryHeading;
