import { motion } from "framer-motion";
import { useState } from "react";
import FAButton from "../../atoms/FAButton";
import FAButtonItem from "../../atoms/FAButtonItem";
import classes from "./FAButtonStack.module.css";

const FAButtonStack = ({ contactInfo }) => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <motion.div
      className={classes["fab-stack"]}
      initial={{
        translateX: "100%",
        opacity: 0,
      }}
      animate={{
        translateX: 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        bounce: 0.6,
        delay: 0.5,
      }}
    >
      <FAButton open={open} handleClick={() => setOpen((prev) => !prev)} />
      <motion.div animate={open ? "open" : "closed"} variants={variants}>
        {contactInfo.map((item) => (
          <FAButtonItem key={item.path} icon={item.icon} path={item.path} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FAButtonStack;
