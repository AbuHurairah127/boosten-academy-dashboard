import React from "react";
import { Link } from "react-router-dom";
import useAddStudents from "./useAddStudents";
import { AiOutlineCloseCircle } from "react-icons/ai";
const AddStudent = () => {
  const { handleChange } = useAddStudents();
  return (
    <div className="container">
      <div className="mx-5 mt-5">
        <div className="text-end">
          <Link to="/students">
            <AiOutlineCloseCircle color="#000" size={30} />
          </Link>
        </div>
        <h1 className="text-center">Add Students</h1>
        <form className="row g-3">
          <div className="col-md-5">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="name"
              placeholder="Name"
              pattern="[a-zA-Z\s]+"
              onChange={(e) => handleChange(e)}
              required
              title="Student's Name (Only Alphabet's are allowed)"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="inputFName" className="form-label">
              Father's Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputFName"
              name="FName"
              placeholder="Father's Name"
              pattern="[a-zA-Z\s]+"
              onChange={(e) => handleChange(e)}
              title="Father's Name"
              required
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputRollNo." className="form-label">
              Roll No.
            </label>
            <input
              type="number"
              className="form-control"
              id="inputRollNo."
              name="rollNo"
              placeholder="Roll No."
              pattern="[0-9]{5}"
              onChange={(e) => handleChange(e)}
              title="Roll No. Pattern: '22000'"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputDOB" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="inputDOB"
              name="DOB"
              onChange={(e) => handleChange(e)}
              title="Student's Date of Birth"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputSNum" className="form-label">
              Student's Phone #
            </label>
            <input
              type="number"
              className="form-control"
              id="inputSNum"
              name="SNum"
              placeholder="Student's Phone #"
              onChange={(e) => handleChange(e)}
              min="923000000000"
              max="923500000000"
              pattern="[0-9]{12}"
              title="Student's Phone (Phone number Pattern :'923336584571')"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputFNum" className="form-label">
              Father's Phone #
            </label>
            <input
              type="number"
              className="form-control"
              id="inputFNum"
              name="FNum"
              placeholder="Father's Phone #"
              onChange={(e) => handleChange(e)}
              min="923000000000"
              max="923500000000"
              title="Father's Phone (Phone number Pattern :'923336584571')"
              pattern="[0-9]{12}"
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Present Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Present Address"
              name="address"
              onChange={(e) => handleChange(e)}
              title="Student's Address"
              required
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
              title="Students City"
              required
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              id="gender"
              className="form-select"
              name="gender"
              onChange={(e) => handleChange(e)}
              title="Student's Gender(Select the student's gender from the list)"
              required
            >
              <option value="">Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="col-md-5">
            <label htmlFor="class" className="form-label">
              Class
            </label>
            <select
              id="class"
              className="form-select"
              name="class"
              onChange={(e) => handleChange(e)}
              title="Student's Class(Select the student's class from the list)"
              required
            >
              <option value="">Choose Class</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="1st-year">11th</option>
              <option value="2nd-year">12th</option>
            </select>
          </div>
          <div className="col-md-7">
            <label htmlFor="subjects" className="form-label">
              Subjects
            </label>
            <select
              id="inputState"
              className="form-select"
              name="subjects"
              onChange={(e) => handleChange(e)}
              title="Student's Class(Select the student's class from the list)"
              required
            >
              <option value="">Choose Subjects</option>

              <option value="9th">Biology Group</option>
              <option value="10th">Computer Group</option>
              <option value="1st-year">FSc(Pre-Medical)</option>
              <option value="1s-year">FSc(Pre-Engineering)</option>
              <option value="1-year">ICS</option>
              <option value="2nd-year">I.Com</option>
            </select>
          </div>

          <div className="col-12 text-center mt-4">
            <button type="submit" className="btn btn-dark px-5">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
