import React from "react";

function Button(props) {
  return (
    <button
      className={`check-btn ${props.isRegValid ? "" : "not-allowed"}`}
      onClick={props.sequnce || props.isRegValid ? props.checkSequence : ""}
    >
      Check
    </button>
  );
}

export default Button;
