import React from "react";
import ComponentD from "./ComponentD";

function ComponentC(props) {
  return (
    <div>
      ComponentC
      <ComponentD userName={props.userName} setData={props.setData} />
    </div>
  );
}

export default ComponentC;
