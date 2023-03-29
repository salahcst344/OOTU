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
    <div className={classes["fab-stack"]}>
      <FAButton open={open} handleClick={() => setOpen((prev) => !prev)} />
      <motion.div animate={open ? "open" : "closed"} variants={variants}>
        {contactInfo.map((item) => (
          <FAButtonItem key={item.path} icon={item.icon} path={item.path} />
        ))}
      </motion.div>
    </div>
  );
};

export default FAButtonStack;
