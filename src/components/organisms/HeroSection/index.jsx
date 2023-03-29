import CenteredContainer from "../../atoms/CenteredContainer";
import SubHeading from "../../atoms/SubHeading";
import PrimaryHeading from "../../atoms/PrimaryHeading";
import classes from "./HeroSection.module.css";
import LightDescription from "../../atoms/LightDescription";
import HeroBtnStack from "../../molecules/HeroBtnStack";

const HeroSection = ({ heroContent }) => {
  return (
    <section className={classes["hero-section"]}>
      <CenteredContainer hero>
        <SubHeading>{heroContent?.subHeading}</SubHeading>
        <PrimaryHeading>{heroContent?.main}</PrimaryHeading>
        <LightDescription>{heroContent?.secondary}</LightDescription>
        <HeroBtnStack
          mainBtn={heroContent.mainBtn}
          secondaryBtn={heroContent.secondaryBtn}
        />
      </CenteredContainer>
    </section>
  );
};

export default HeroSection;
