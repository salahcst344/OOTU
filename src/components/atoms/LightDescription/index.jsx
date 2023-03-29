import React from "react";

const LightDescription = ({ children }) => {
  return (
    <p
      style={{
        fontSize: "2rem",
        lineHeight: 1.5,
        marginBottom: "4.8rem",
      }}
    >
      {children}
    </p>
  );
};

export default LightDescription;
