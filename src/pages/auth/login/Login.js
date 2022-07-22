import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container-fluid loginPage d-flex flex-column justify-content-between">
      <div className="row">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand  h1 text-center">
              Boosten Academy
            </span>
          </div>
        </nav>
      </div>
      <div className="row flex justify-content-center align-items-center">
        <div className="formContainer col-8  border-2 border border-secondary rounded p-4">
          <div className="row">
            <h1 className="text-center">Login</h1>
          </div>
          <form className="d-flex flex-column">
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                />
              </div>
            </div>
            <div className="align-self-center">
              <button type="submit" className="btn btn-dark px-5">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
