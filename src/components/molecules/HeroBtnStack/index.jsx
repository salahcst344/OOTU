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
      <MainBtn href={mainBtn.path}>{mainBtn.text}</MainBtn>
      <SecondaryBtn href={secondaryBtn.path}>{secondaryBtn.text}</SecondaryBtn>
    </div>
  );
};

export default HeroBtnStack;
