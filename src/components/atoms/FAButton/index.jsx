import classes from "./FAButton.module.css";
import { ReactComponent as ChatIcon } from "../../../assets/Icons/chat.svg";
import { ReactComponent as XIcon } from "../../../assets/Icons/x.svg";

const FAButton = ({ open, handleClick }) => {
  return (
    <button className={classes.FAButton} onClick={handleClick}>
      {!open ? <ChatIcon /> : <XIcon />}
    </button>
  );
};

export default FAButton;
