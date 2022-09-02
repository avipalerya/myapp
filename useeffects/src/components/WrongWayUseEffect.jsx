import React, { useState } from "react";

function WrongWayUseEffect() {
  const [count, setCount] = useState(0);
  useState(() => {
    console.log("use effect executed");
  }); //this is wrong
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count={count}</p>
      <button onClick={increment}>Click</button>
    </div>
  );
}

export default WrongWayUseEffect;
