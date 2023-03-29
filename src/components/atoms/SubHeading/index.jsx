const SubHeading = ({ children, styles }) => {
  return (
    <span
      style={{
        display: "block",
        fontSize: "1.8rem",
        fontWeight: 500,
        color: "var(--primary-shade)",
        textTransform: "uppercase",
        marginBottom: "1.6rem",
        letterSpacing: "0.75px",
        ...styles,
      }}
    >
      {children}
    </span>
  );
};

export default SubHeading;
