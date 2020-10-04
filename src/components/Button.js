import React from "react";

function Button(props) {
  // const func = () => {
  //   console.log(props.isRegValid);
  //   if (props.sequnce || props.isRegValid) {
  //     props.checkSequence();
  //   } else {
  //     return "";
  //   }
  // };
  return (
    <button
      className={`check-btn ${props.isRegValid ? "" : "not-allowed"}`}
      onClick={props.sequnce || props.isRegValid ? props.checkSequence : ""}
      // onClick={func}
    >
      Check
    </button>
  );
}

export default Button;
