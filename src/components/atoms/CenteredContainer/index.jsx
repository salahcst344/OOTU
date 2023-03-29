const CenteredContainer = ({ hero, children }) => {
  return (
    <div
      style={{
        maxWidth: !hero ? "120rem" : "100rem",
        padding: "0 3.2rem",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
};

export default CenteredContainer;
