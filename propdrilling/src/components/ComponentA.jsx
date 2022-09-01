import React from "react";
import ComponentB from "./ComponentB";

function ComponentA(props) {
  return (
    <div>
      ComponentA
      <ComponentB userName={props.userName} setData={props.setData} />
    </div>
  );
}

export default ComponentA;
