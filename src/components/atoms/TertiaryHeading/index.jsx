const TertiaryHeading = ({ Children, styles }) => {
  return (
    <h3
      style={{
        fontSize: "3rem",
        lineHeight: 1.2,
        marginBottom: "3.2rem",
        ...styles,
      }}
    >
      {Children}
    </h3>
  );
};

export default TertiaryHeading;
