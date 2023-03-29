const TertiaryHeading = ({ children, styles }) => {
  return (
    <h3
      style={{
        fontSize: "3rem",
        lineHeight: 1.2,
        marginBottom: "3.2rem",
        ...styles,
      }}
    >
      {children}
    </h3>
  );
};

export default TertiaryHeading;
