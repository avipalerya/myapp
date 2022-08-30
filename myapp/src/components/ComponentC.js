import React, { useState } from "react";

export const ComponentC = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const updateUserName = (event) => {
    console.log(event.target.value);
    setUser({
      ...user,
      userName: event.target.value,
    });
  };
  const updatePassword = (event) => {
    setUser({
      ...user,
      password: event.target.value,
    });
  };
  const login = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      ComponentC
      <form>
        UserName:
        <input type="text" onChange={updateUserName} />
        Password:
        <input type="text" onChange={updatePassword} />
        <button onClick={login}>login</button>
        <p>{user.userName}</p>
        <p>{user.password}</p>
      </form>
    </div>
  );
};
export default ComponentC;
