import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import whyUsUmg from "../../../assets/why-us2.jpg";

const WhyUsImg = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const transition = {
    type: "spring",
    duration: 1.8,
  };

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        {
          opacity: 1,
          scale: 1,
        },
        transition
      );
    } else {
      animate(
        scope.current,
        {
          opacity: 0,
          scale: 0,
        },
        transition
      );
    } // eslint-disable-next-line
  }, [isInView]);

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0 }}
      style={{
        width: "110%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={whyUsUmg} alt="why us" width="100%" />
    </motion.div>
  );
};

export default WhyUsImg;
