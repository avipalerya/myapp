import React, { useEffect, useState } from "react";

function RightWayUseEffect() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("use effect executed in mounting phase");
    return () => {
      console.log("component will unmount phase executed");
    };
  }, []); //if it is empty it is called mounting phase

  useEffect(() => {
    if (count !== 0) {
      console.log("use effect ComponentDidUpdate is executed");
    }
  }, [count]); //if we have dependency array in our useEffect it is updating phase

  return (
    <div>
      <h1>count-{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default RightWayUseEffect;
