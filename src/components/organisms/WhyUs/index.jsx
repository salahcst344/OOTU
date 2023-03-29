import LightDescription from "../../atoms/LightDescription";
import SecondaryHeading from "../../atoms/SecondaryHeading";
import SubHeading from "../../atoms/SubHeading";
import WhyUsList from "../../molecules/WhyUsList";
import { ReactComponent as WhyUsImg } from "../../../assets/why-us.svg";
import classes from "./WhyUs.module.css";

const WhyUs = ({ whyUs }) => {
  return (
    <section className={classes["why-us"]}>
      <SubHeading>we are the best</SubHeading>
      <SecondaryHeading>Why Choose Us</SecondaryHeading>
      <LightDescription>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, ad
        maxime repellat at et ipsam.
      </LightDescription>
      <div>
        <WhyUsList whyUs={whyUs} />
        <div>
          <WhyUsImg />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
