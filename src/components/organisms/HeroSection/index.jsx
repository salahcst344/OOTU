import CenteredContainer from "../../atoms/CenteredContainer";
import SubHeading from "../../atoms/SubHeading";
import PrimaryHeading from "../../atoms/PrimaryHeading";
import classes from "./HeroSection.module.css";
import LightDescription from "../../atoms/LightDescription";
import HeroBtnStack from "../../molecules/HeroBtnStack";
import FadeDiv from "../../atoms/FadeDiv";

const HeroSection = ({ heroContent }) => {
  return (
    <section className={classes["hero-section"]}>
      <CenteredContainer hero>
        <SubHeading>{heroContent?.subHeading}</SubHeading>
        <PrimaryHeading>{heroContent?.main}</PrimaryHeading>
        <LightDescription styles={{ opacity: 0.9 }}>
          {heroContent?.secondary}
        </LightDescription>
        <HeroBtnStack
          mainBtn={heroContent.mainBtn}
          secondaryBtn={heroContent.secondaryBtn}
        />
      </CenteredContainer>

      <FadeDiv />
    </section>
  );
};

export default HeroSection;
