import React, { Component } from "react";

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
const abc = RegExp(/^[1-9]?[0-9]{1}$|^100$/);
const pqr = RegExp(/(Male|Female)/);

const validation = ({ error, ...rest }) => {
  let checkValidation = false;

  Object.values(error).forEach((val) => {
    if (val.length > 0) {
      checkValidation = false;
    } else {
      checkValidation = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val === null) {
      checkValidation = false;
    } else {
      checkValidation = true;
    }
  });

  return checkValidation;
};

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      age: "",
      gender: "",
      email: "",
      password: "",
      error: {
        fname: "",
        lname: "",
        age: "",
        gender: "",
        email: "",
        password: "",
      },
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (validation(this.state)) {
      console.log(this.state);
    } else {
      console.log("Error occurred");
    }
  };

  formObject = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let error = { ...this.state.error };

    switch (name) {
      case "fname":
        error.fname =
          value.length < 3 ? "Name should be 3 characters long" : "";
        break;

      case "lname":
        error.lname =
          value.length < 1 ? "Name should be 1 characters long" : "";
        break;

      case "age":
        error.age = abc.test(value) ? "" : "age is not valid";
        break;

      case "gender":
        error.gender = pqr.test(value) ? "" : "gender is not valid";
        break;

      case "email":
        error.email = regularExpression.test(value) ? "" : "Email is not valid";
        break;

      case "password":
        error.password =
          value.length < 8 ? "Password should 8 characters long" : "";
        break;
      default:
        break;
    }

    this.setState({
      error,
      [name]: value,
    });
  };

  render() {
    const { error } = this.state;

    return (
      <div className="container">
        <div className="card mt-5">
          <form className="card-body" onSubmit={this.onFormSubmit}>
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>fname</strong>
              </label>
              <input
                required
                type="text"
                name="fname"
                onChange={this.formObject}
                className={
                  error.fname.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />
              {error.fname.length > 0 && (
                <span className="invalid-feedback">{error.fname}</span>
              )}
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>lname</strong>
              </label>
              <input
                required
                type="text"
                name="lname"
                onChange={this.formObject}
                className={
                  error.lname.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />

              {error.lname.length > 0 && (
                <span className="invalid-feedback">{error.lname}</span>
              )}
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>age</strong>
              </label>
              <input
                required
                type="text"
                name="age"
                onChange={this.formObject}
                className={
                  error.age.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />

              {error.age.length > 0 && (
                <span className="invalid-feedback">{error.age}</span>
              )}
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>gender</strong>
              </label>
              <input
                required
                type="text"
                name="gender"
                onChange={this.formObject}
                className={
                  error.gender.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />

              {error.gender.length > 0 && (
                <span className="invalid-feedback">{error.gender}</span>
              )}
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Email</strong>
              </label>
              <input
                required
                type="email"
                name="email"
                className={
                  error.email.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
                onChange={this.formObject}
              />

              {error.email.length > 0 && (
                <span className="invalid-feedback">{error.email}</span>
              )}
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Password</strong>
              </label>
              <input
                required
                type="password"
                name="password"
                className={
                  error.password.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
                onChange={this.formObject}
              />

              {error.password.length > 0 && (
                <span className="invalid-feedback">{error.password}</span>
              )}
            </div>

            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-block btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
