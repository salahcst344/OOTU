import LightDescription from "../../atoms/LightDescription";
import SecondaryHeading from "../../atoms/SecondaryHeading";
import SubHeading from "../../atoms/SubHeading";
import WhyUsList from "../../molecules/WhyUsList";
import whyUsUmg from "../../../assets/why-us2.jpg";
import classes from "./WhyUs.module.css";
import CenteredContainer from "../../atoms/CenteredContainer";

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
          <div className={classes["why-img"]}>
            <img src={whyUsUmg} alt="why us" />
          </div>
        </CenteredContainer>
      </div>
    </section>
  );
};

export default WhyUs;
