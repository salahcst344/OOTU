import LightDescription from "../../atoms/LightDescription";
import SecondaryHeading from "../../atoms/SecondaryHeading";
import SubHeading from "../../atoms/SubHeading";
import WhyUsList from "../../molecules/WhyUsList";
import CenteredContainer from "../../atoms/CenteredContainer";
import WhyUsImg from "../../atoms/WhyUsImg";
import classes from "./WhyUs.module.css";

const WhyUs = ({ whyUs }) => {
  return (
    <section className={classes["why-us"]}>
      <div>
        <div className={classes.heading}>
          <SubHeading>we are the best</SubHeading>
          <SecondaryHeading
            styles={{
              color: "var(--primary-shade)",
            }}
          >
            Why Choose Us
          </SecondaryHeading>
          <LightDescription styles={{ width: "60ch" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
            ad maxime repellat at et ipsam.
          </LightDescription>
        </div>
        <CenteredContainer>
          <WhyUsList whyUs={whyUs} />
        </CenteredContainer>
      </div>
      <WhyUsImg />
    </section>
  );
};

export default WhyUs;
