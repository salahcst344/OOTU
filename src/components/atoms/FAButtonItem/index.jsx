import classes from "./FABItem.module.css";
import { motion } from "framer-motion";

const FAButtonItem = ({ icon, path }) => {
  return (
    <motion.a href={path} className={classes["fab-item"]}>
      {icon}
    </motion.a>
  );
};

export default FAButtonItem;
