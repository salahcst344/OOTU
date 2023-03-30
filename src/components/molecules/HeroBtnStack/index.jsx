import MainBtn from "../../atoms/MainBtn";
import SecondaryBtn from "../../atoms/SecondaryBtn";
import { motion } from "framer-motion";

const HeroBtnStack = ({ mainBtn, secondaryBtn }) => {
  return (
    <motion.div
      style={{
        display: "flex",
        gap: "3.2rem",
        justifyContent: "center",
      }}
      initial={{
        opacity: 0,
        gap: "9.6rem",
      }}
      animate={{
        opacity: 1,
        gap: "3.2rem",
      }}
      transition={{
        type: "spring",
        bounce: 0.6,
        duration: 1,
        delay: 0.3,
      }}
    >
      <MainBtn href={mainBtn.path}>
        {mainBtn.text}
        {mainBtn.icon}
      </MainBtn>
      <SecondaryBtn href={secondaryBtn.path}>{secondaryBtn.text}</SecondaryBtn>
    </motion.div>
  );
};

export default HeroBtnStack;
