import React from "react";

const LightDescription = ({ children, styles, gutterButtom = true }) => {
  return (
    <p
      style={{
        fontSize: "2rem",
        lineHeight: 1.5,
        marginBottom: gutterButtom ? "4.8rem" : undefined,
        opacity: 0.65,
        ...styles,
      }}
    >
      {children}
    </p>
  );
};

export default LightDescription;
