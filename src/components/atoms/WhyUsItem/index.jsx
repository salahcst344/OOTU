import LightDescription from "../LightDescription";
import TertiaryHeading from "../TertiaryHeading";
import classes from "./WhyUsItem.module.css";

const WhyUsItem = ({ whyUs }) => {
  return (
    <li className={classes["why-us-item"]}>
      <div className={classes["why-us-dot"]}>
        <div>
          <img src={whyUs.img} alt={whyUs.title} />
        </div>
      </div>
      <div>
        <TertiaryHeading
          styles={{
            color: "var(--primary-shader)",
          }}
        >
          {whyUs.title}
        </TertiaryHeading>
        <LightDescription gutterButtom={false}>
          {whyUs.description}
        </LightDescription>
      </div>
    </li>
  );
};

export default WhyUsItem;
