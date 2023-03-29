import classes from "./SecondaryBtn.module.css";

const SecondaryBtn = ({ children, href }) => {
  return (
    <a href={href} className={`btn ${classes["secondary-btn"]}`}>
      {children}
    </a>
  );
};

export default SecondaryBtn;
