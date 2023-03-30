import WhyUsItem from "../../atoms/WhyUsItem";

const WhyUsList = ({ whyUs }) => {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4.8rem",
      }}
    >
      {whyUs.map((item) => (
        <WhyUsItem key={item.title} whyUs={item} />
      ))}
    </ul>
  );
};

export default WhyUsList;
