import React from "react";

const LightDescription = ({ children, gutterButtom = true }) => {
  return (
    <p
      style={{
        fontSize: "2rem",
        lineHeight: 1.5,
        marginBottom: gutterButtom ? "4.8rem" : undefined,
        opacity: 0.9,
      }}
    >
      {children}
    </p>
  );
};

export default LightDescription;
