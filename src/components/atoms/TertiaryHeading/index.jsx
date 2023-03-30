import { useAnimate, useInView, motion } from "framer-motion";
import { useEffect } from "react";

const TertiaryHeading = ({ children, styles }) => {
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
          translateX: 0,
          opacity: 1,
        },
        transition
      );
    } // eslint-disable-next-line
  }, [isInView]);

  return (
    <motion.h3
      ref={scope}
      style={{
        fontSize: "2.8rem",
        lineHeight: 1.2,
        marginBottom: "3.2rem",
        ...styles,
      }}
      initial={{
        translateX: "-50px",
        opacity: 0,
      }}
    >
      {children}
    </motion.h3>
  );
};

export default TertiaryHeading;
