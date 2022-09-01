import React, { useState } from "react";
import "./Login.css";
function Login() {
  let [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  let [printData, setPrintData] = useState({
    printUserName: "",
    printPassword: "",
  });
  const loginFunc = (e) => {
    e.preventDefault();
    const loginCopy = { ...login };
    loginCopy[e.target.name] = e.target.value;
    setLogin(loginCopy, "login copy");
    setLogin(loginCopy);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPrintData({
      ...printData,
      printUserName: login.userName,
      printPassword: login.password,
    });
    localStorage.setItem("userName", login.userName);
    localStorage.setItem("password", login.password);
    console.log("userName", login.userName);
    console.log("password", login.password);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="" className="lb1">
          User Name:
        </label>
        <input
          type="text"
          className="inp1"
          onChange={loginFunc}
          name="userName"
          value={login.userName}
        />{" "}
        <br />
        <label htmlFor="" className="lb2">
          Password:
        </label>
        <input
          type="text"
          className="inp2"
          onChange={loginFunc}
          name="password"
          value={login.password}
        />
        <br />
        <button type="submit" className="btn">
          LogIn
        </button>
        <button
          onClick={() => {
            localStorage.clear();
          }}
        >
          LogOut
        </button>
      </form>
      <p>{localStorage.getItem("userName")}</p>
      <p>{localStorage.getItem("password")}</p>
    </div>
  );
}

export default Login;
