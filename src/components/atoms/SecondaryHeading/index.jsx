import { useAnimate, useInView, motion } from "framer-motion";
import { useEffect } from "react";

const SecondaryHeading = ({ children, styles }) => {
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
    <motion.h2
      ref={scope}
      style={{
        fontSize: "4.4rem",
        lineHeight: 1.2,
        marginBottom: "4.8rem",
        ...styles,
      }}
      initial={{
        translateX: "-50px",
        opacity: 0,
      }}
    >
      {children}
    </motion.h2>
  );
};

export default SecondaryHeading;
