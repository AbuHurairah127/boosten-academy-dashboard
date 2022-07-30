import React from "react";
import "./Login.css";
import useLogin from "./useLogin";

const Login = () => {
  const { formik } = useLogin();
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
          <form className="d-flex flex-column" onSubmit={formik.handleSubmit}>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password:
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
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
