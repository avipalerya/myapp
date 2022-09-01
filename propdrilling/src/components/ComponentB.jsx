import React from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
  return (
    <div>
      ComponentB
      <ComponentC userName={props.userName} setData={props.setData} />
    </div>
  );
}

export default ComponentB;
