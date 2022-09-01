import React from "react";
import { useContext } from "react";
import contextData from "./ContextApi";
import Usercontext from "./ContextUser";

function ComponentC() {
  const dataContext = useContext(contextData);
  const userContext = useContext(Usercontext);
  const changeData = () => {
    userContext("Ram");
  };
  return (
    <div>
      ComponentC
      <h3> this fname from app Component is {dataContext}</h3>
      <button onClick={changeData}> Click</button>
    </div>
  );
}

export default ComponentC;
