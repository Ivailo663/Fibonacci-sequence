import React from "react";

function Info() {
  return (
    <div className="info-screen">
      <div className="text-holder">
        <h1>
          Check if sequence of numbers is <br />
          <span className="underline">'Fibonacci sequence'</span>
        </h1>
        <h3>
          That means the next number in sequence is found by adding up the two
          numbers before it:
        </h3>
        <p className="sequence">0,1,1,2,3,5</p>
        {/* <p></p>
        <p></p> */}
        <div className="examples">
          in that case 3 is result from addition of 1 and 2<br /> 5 would be
          result from addition of 2 and 3 etc..
        </div>
      </div>
      <p className="created-by">Created by: Ivaylo Georgiev</p>
    </div>
  );
}

export default Info;
