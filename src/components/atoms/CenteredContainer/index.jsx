const CenteredContainer = ({ hero, children }) => {
  return (
    <div
      style={{
        maxWidth: !hero ? "140rem" : "80rem",
        paddingInline: "3.2rem",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
};

export default CenteredContainer;
