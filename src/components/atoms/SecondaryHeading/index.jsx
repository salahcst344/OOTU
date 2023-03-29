const SecondaryHeading = ({ children, styles }) => {
  return (
    <h2
      style={{
        fontSize: "4.4rem",
        lineHeight: 1.2,
        marginBottom: "9.6rem",
        ...styles,
      }}
    >
      {children}
    </h2>
  );
};

export default SecondaryHeading;
