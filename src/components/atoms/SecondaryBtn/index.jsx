import classes from "./SecondaryBtn.module.css";

const SecondaryBtn = ({ children }) => {
  return <button className={classes["secondary-btn"]}>{children}</button>;
};

export default SecondaryBtn;
