import classes from "./MainBtn.module.css";

const MainBtn = ({ children }) => {
  return <button className={classes["main-btn"]}>{children}</button>;
};

export default MainBtn;
