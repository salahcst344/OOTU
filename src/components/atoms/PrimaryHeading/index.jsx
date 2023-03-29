const PrimaryHeading = ({ children, styles }) => {
  return (
    <h1
      style={{
        fontSize: "5.2rem",
        lineHeight: 1.05,
        marginBottom: "3.2rem",
        ...styles,
      }}
    >
      {children}
    </h1>
  );
};

export default PrimaryHeading;
