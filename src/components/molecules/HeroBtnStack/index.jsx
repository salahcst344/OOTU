import MainBtn from "../../atoms/MainBtn";
import SecondaryBtn from "../../atoms/SecondaryBtn";

const HeroBtnStack = ({ mainBtn, secondaryBtn }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "3.2rem",
        justifyContent: "center",
      }}
    >
      <MainBtn>{mainBtn}</MainBtn>
      <SecondaryBtn>{secondaryBtn}</SecondaryBtn>
    </div>
  );
};

export default HeroBtnStack;
