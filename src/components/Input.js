import React, { createRef } from "react";

function Input(props) {
  const inputRef = createRef();
  const clear = () => {
    inputRef.current.value = "";
    props.clearInput();
  };
  const manageInputClasses = () => {
    return props.sequence ? (props.isRegValid ? "validReg" : "invalidReg") : "";
  };
  return (
    <form className="input-holder">
      <input
        type="text"
        placeholder="enter numbers"
        className={manageInputClasses()}
        onChange={props.handleInput}
        ref={inputRef}
      />
      {props.sequence ? (
        <button type="reset" className="clear-input-btn" onClick={clear}>
          <img src={require("../trash.png")} />
        </button>
      ) : null}
    </form>
  );
}

export default Input;
