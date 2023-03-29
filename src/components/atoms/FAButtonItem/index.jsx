import classes from "./FABItem.module.css";

const FAButtonItem = ({ icon, path }) => {
  return (
    <a href={path} className={classes["fab-item"]}>
      {icon}
    </a>
  );
};

export default FAButtonItem;
