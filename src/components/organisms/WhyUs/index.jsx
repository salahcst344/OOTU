import CenteredContainer from "../../atoms/CenteredContainer";
import LightDescription from "../../atoms/LightDescription";
import SecondaryHeading from "../../atoms/SecondaryHeading";
import SubHeading from "../../atoms/SubHeading";
import classes from "./WhyUs.module.css";

const WhyUs = () => {
  return (
    <section className={classes["why-us"]}>
      <CenteredContainer>
        <SubHeading>we are the best</SubHeading>
        <SecondaryHeading>Why Choose Us</SecondaryHeading>
        <LightDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          ad maxime repellat at et ipsam.
        </LightDescription>
      </CenteredContainer>
    </section>
  );
};

export default WhyUs;
