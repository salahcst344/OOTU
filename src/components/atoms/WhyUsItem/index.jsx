import LightDescription from "../LightDescription";
import TertiaryHeading from "../TertiaryHeading";
import classes from "./WhyUsItem.module.css";

const WhyUsItem = ({ whyUs }) => {
  return (
    <li className={classes["why-us-item"]}>
      <div className={classes["why-us-dot"]}>
        <img src={whyUs.img} alt={whyUs.title} />
      </div>
      <div>
        <TertiaryHeading>{whyUs.title}</TertiaryHeading>
        <LightDescription gutterButtom={false}>
          {whyUs.description}
        </LightDescription>
      </div>
    </li>
  );
};

export default WhyUsItem;
