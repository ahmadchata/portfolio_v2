import React, { useState } from "react";

const BioButtons = ({ buttons, submit }) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (event, id) => {
    setClickedId(id);
    submit(event);
  };

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          id={i}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={`py-1 px-3 monteya-font me-3
            ${i === clickedId ? "active" : "bio-buttons "}
          `}
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};

export default BioButtons;
