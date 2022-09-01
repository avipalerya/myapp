import React from "react";

function ComponentD(props) {
  const changeData = () => {
    props.setData("Avi");
  };
  return (
    <div>
      ComponentD
      {props.userName}
      <button onClick={changeData}>ChangeData</button>
    </div>
  );
}

export default ComponentD;
