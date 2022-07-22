import React from "react";
import { Link } from "react-router-dom";
import useAddStudents from "./useAddStudents";
const AddStudent = () => {
  const { handleChange } = useAddStudents();
  return (
    <div className="mx-5 mt-5">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="text-center">Add Students</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Residential Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Residential Address"
            name="address"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Postal Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Postal Address"
            name="address2"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-md-7">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            name="city"
            placeholder="City"
            onChange={(e) => handleChange(e)}
          />
        </div> */}
        <div className="col-md-5">
          <label htmlFor="inputState" className="form-label">
            Gender
          </label>
          <select
            id="inputState"
            className="form-select"
            name="gender"
            onChange={(e) => handleChange(e)}
          >
            <option disabled>Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefer not to say">Prefer not to say</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Class
          </label>
          <select
            id="inputState"
            className="form-select"
            name="Class"
            onChange={(e) => handleChange(e)}
          >
            <option disabled>Choose Class</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
            <option value="1st-year">11th</option>
            <option value="2nd-year">12th</option>
          </select>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
