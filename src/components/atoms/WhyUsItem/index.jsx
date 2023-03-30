import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import LightDescription from "../LightDescription";
import TertiaryHeading from "../TertiaryHeading";
import classes from "./WhyUsItem.module.css";

const WhyUsItem = ({ whyUs }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const transition = {
    type: "spring",
    duration: 1.5,
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
    <li className={classes["why-us-item"]}>
      <div className={classes["why-us-dot"]}>
        <motion.div ref={scope} initial={{ opacity: 0, scale: 0 }}>
          <img src={whyUs.img} alt={whyUs.title} />
        </motion.div>
      </div>
      <div>
        <TertiaryHeading
          styles={{
            color: "var(--primary-shader)",
          }}
        >
          {whyUs.title}
        </TertiaryHeading>
        <LightDescription gutterButtom={false}>
          {whyUs.description}
        </LightDescription>
      </div>
    </li>
  );
};

export default WhyUsItem;
