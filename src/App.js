import React, { useState } from "react";
import logo from "./logo.svg";
import Input from "./components/Input";
import Button from "./components/Button";
import info from "./info.svg";
import Info from "./components/Info";
import "./App.css";

function App() {
  const regex = new RegExp("^[0-9]+(,[1-9]+)*$");
  const [sequence, setSequence] = useState("");
  const [isRegValid, setIsRegValid] = useState(true);
  const [isFibonacci, setIsFibonacci] = useState(false);
  const [isCheckClicked, setIsCheckClicked] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const handleInput = (event) => {
    const sequence = event.target.value;
    setSequence(sequence);
    setIsRegValid(regex.test(sequence));
    if (!event.target.value) {
      setIsCheckClicked(false);
    }
    console.log(event.target.value);
  };

  const loopCollection = (arr) => {
    let states = [];
    if (arr.length < 3) {
      setIsFibonacci(false);
    } else {
      for (let i = 0; i < arr.length - 2; i++) {
        states.push(arr[i + 2] == arr[i] + arr[i + 1]);
      }
      if (states.every((el) => el == true)) {
        setIsFibonacci(true);
      } else {
        setIsFibonacci(false);
      }
    }
  };
  const fibonacciCheck = () => {
    //Creating array of strings from the input
    const rawString = sequence.split(",");
    const arr = [];
    for (let i = 0; i < rawString.length; i++) {
      //parsing each element to number
      arr.push(rawString[i] * 1);
    }
    loopCollection(arr);
    setIsCheckClicked(true);
  };
  const clearInput = () => {
    setSequence(null);
    setIsCheckClicked(false);
  };
  const manageSuccessMsg = () => {
    return isCheckClicked ? (
      isFibonacci ? (
        <p>
          <strong>Fibonacci sequence!</strong>
        </p>
      ) : (
        <p>
          <strong>Try another sequence. </strong>
        </p>
      )
    ) : (
      ""
    );
  };
  const toggleInfoScreen = () => {
    setIsInfoOpen(!isInfoOpen);
  };
  const manageBackground = () => {
    return (
      <>
        <div
          className={`greenSide ${
            isCheckClicked ? (isFibonacci ? "isFibonacci" : "shrinked") : ""
          }`}
        ></div>
        <div
          className={`redSide ${
            isCheckClicked ? (!isFibonacci ? "isNotFibonacci" : "shrinked") : ""
          }`}
        ></div>
      </>
    );
  };
  return (
    <div className="App">
      <h1 className="info-header">
        Check if sequence of numbers is <br />
        <span className="underline">'Fibonacci sequence'</span>
      </h1>
      {manageBackground()}
      <div className="form-container">
        {manageSuccessMsg()}
        <p className={`allowed-input ${!isRegValid ? "wrong-input" : ""}`}>
          Only comma separated numbers allowed!
        </p>
        <Input
          handleInput={handleInput}
          isRegValid={isRegValid}
          sequence={sequence}
          clearInput={clearInput}
        />
        <Button
          isRegValid={isRegValid}
          checkSequence={() => fibonacciCheck()}
        />
      </div>
      {}

      <div className="info-btn" onClick={toggleInfoScreen}>
        <img src={info} />
      </div>
      {isInfoOpen ? <Info /> : ""}
    </div>
  );
}

export default App;
