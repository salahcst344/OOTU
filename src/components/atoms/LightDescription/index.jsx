import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const LightDescription = ({ children, styles, gutterButtom = true, once }) => {
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
          opacity: styles?.opacity || 0.65,
        },
        transition
      );
    } else {
      animate(
        scope.current,
        {
          translateX: "100%",
          opacity: 0,
        },
        transition
      );
    } // eslint-disable-next-line
  }, [isInView]);

  return (
    <motion.p
      ref={scope}
      style={{
        fontSize: "1.8rem",
        lineHeight: 1.5,
        marginBottom: gutterButtom ? "4.8rem" : undefined,
        opacity: 0.65,
        ...styles,
      }}
      initial={{
        translateX: "100%",
        opacity: 0,
      }}
    >
      {children}
    </motion.p>
  );
};

export default LightDescription;
