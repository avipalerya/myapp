import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [setLogin, setLoginData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleChange = (e) => {
    setLoginData({
      ...setLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setLogin.email === "" || setLogin.password === "") {
      alert("enter the data");
    } else {
      console.log(setLoginData);
    }

    console.log(setLogin);
  };
  const redirect = () => {
    navigate("/signup");
  };
  return (
    <div className="container boder mt-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={setLogin.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            value={setLogin.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br />
        <Link to="/signup">Don't have an account? Signup Here!</Link>
      </form>
    </div>
  );
}

export default Login;
