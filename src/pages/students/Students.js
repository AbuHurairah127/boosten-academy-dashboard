import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import "./students.css";
import useStudents from "./useStudents";
import ButtonLoader from "./../../components/buttonLoader/ButtonLoader";
const Students = () => {
  const students = useSelector((store) => store.studentReducer.studentsList);
  const {
    fetchStudentRollNo,
    setFetchStudentRollNo,
    fetchLoader,
    fetchSingleStudent,
    formik,
  } = useStudents();
  return (
    <div className="d-flex flex-column studentsContainer">
      <Navbar />
      <main>
        {" "}
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <Link to="/add-students">
                <button className="btn btn-outline-dark my-4 px-5">
                  Add Students
                </button>
              </Link>
            </div>
          </div>
          <div className="border-bottom border-secondary mt-3 w-75 m-auto"></div>
          <div className="row">
            <div className="col">
              <h1 className="display-5 text-center">List of Students</h1>
            </div>
          </div>
          {fetchLoader ? (
            <div
              className="container-fluid d-flex justify-content-center align-items-center"
              style={{
                minHeight: "35vh",
              }}
            >
              <ButtonLoader />
            </div>
          ) : students.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    #
                  </th>
                  <th scope="col" className="text-center">
                    Student Name
                  </th>
                  <th scope="col" className="text-center">
                    Father Name
                  </th>
                  <th scope="col" className="text-center">
                    Roll No.
                  </th>

                  <th scope="col" className="text-center">
                    Class
                  </th>
                  <th scope="col" className="text-center">
                    Gender
                  </th>
                  <th scope="col" className="text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center">{index + 1}</td>
                      <td className="text-center">{item.name}</td>
                      <td className="text-center">{item.fatherName}</td>
                      <td className="text-center">{item.rollNo}</td>
                      <td className="text-center">{item.class}</td>
                      <td className="text-center">{item.gender}</td>

                      <td className="text-center">
                        <button
                          className="btn btn-outline-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          Update
                        </button>
                        <button className="btn btn-outline-danger mx-2">
                          Delete
                        </button>
                        <button className="btn btn-outline-primary px-2">
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="col text-center my-4">
              <a
                className="btn btn-outline-dark px-5 my-5"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
              >
                Fetch Students
              </a>
            </div>
          )}
          <>
            <form onSubmit={formik.handleSubmit}>
              <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex={-1}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalToggleLabel">
                        Fetch Full Class
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="col-md-11 m-auto">
                        <label htmlFor="class" className="form-label">
                          Class
                        </label>
                        <select
                          id="class"
                          className="form-select"
                          name="class"
                          onChange={formik.handleChange}
                          title="Student's Class(Select the student's class from the list)"
                          required
                        >
                          <option value="">Choose Class</option>
                          <option value="9th">9th</option>
                          <option value="10th">10th</option>
                          <option value="1st-year">11th</option>
                          <option value="2nd-year">12th</option>
                        </select>{" "}
                        {formik.errors.class && (
                          <div className="text-center fw-bold text-danger">
                            {formik.errors.class}
                          </div>
                        )}
                      </div>
                      <div className="col-md-11 m-auto">
                        <label htmlFor="subjects" className="form-label">
                          Subjects
                        </label>
                        <select
                          id="inputState"
                          className="form-select"
                          name="subjects"
                          onChange={formik.handleChange}
                          title="Student's Class(Select the student's class from the list)"
                        >
                          <option value="">Choose Subjects</option>
                          {/* Subjects for 9th Class */}
                          {formik.values.class === "9th" && (
                            <>
                              <option
                                value={[
                                  "English",
                                  "Urdu",
                                  "Maths",
                                  "IS",
                                  "PS",
                                  "Physics",
                                  "Chemistry",
                                  "Biology",
                                ]}
                              >
                                Biology Group
                              </option>
                              <option
                                value={[
                                  "English",
                                  "Urdu",
                                  "Maths",
                                  "IS",
                                  "PS",
                                  "Physics",
                                  "Chemistry",
                                  "Computer",
                                ]}
                              >
                                Computer Group
                              </option>
                            </>
                          )}
                          {/* Subjects for 10th Class */}
                          {formik.values.class === "10th" && (
                            <>
                              <option
                                value={[
                                  "English",
                                  "Urdu",
                                  "Maths",
                                  "IS",
                                  "PS",
                                  "Physics",
                                  "Chemistry",
                                  "Biology",
                                ]}
                              >
                                Biology Group
                              </option>
                              <option
                                value={[
                                  "English",
                                  "Urdu",
                                  "Maths",
                                  "IS",
                                  "PS",
                                  "Physics",
                                  "Chemistry",
                                  "Computer",
                                ]}
                              >
                                Computer Group
                              </option>
                            </>
                          )}
                          {/* Subjects for 1st Year */}
                          {formik.values.class === "1st-year" && (
                            <>
                              <option
                                value={[
                                  "English",
                                  "Urdu",
                                  "Physics",
                                  "Chemistry",
                                  "IS",
                                  "Biology",
                                ]}
                              >
                                FSc(Pre-Medical)
                              </option>
                              <option
                                value={[
                                  "English",
                                  "Urdu",
                                  "Physics",
                                  "Chemistry",
                                  "IS",
                                  "Maths",
                                ]}
                              >
                                FSc(Pre-Engineering)
                              </option>
                              <option
                                value={[
                                  "English",
                                  "Urdu",
                                  "Physics",
                                  "Computer",
                                  "IS",
                                  "Maths",
                                ]}
                              >
                                ICS
                              </option>
                              <option value="I.com">I.Com</option>
                            </>
                          )}
                          {/* Subjects for 2nd Year */}
                          {formik.values.class === "2nd-year" && (
                            <>
                              <option
                                value={[
                                  "English",
                                  "Urdu",
                                  "Physics",
                                  "Chemistry",
                                  "PS",
                                  "Biology",
                                ]}
                              >
                                FSc(Pre-Medical)
                              </option>
                              <option
                                value={[
                                  "English",
                                  "Urdu",
                                  "Physics",
                                  "Chemistry",
                                  "PS",
                                  "Maths",
                                ]}
                              >
                                FSc(Pre-Engineering)
                              </option>
                              <option
                                value={[
                                  "English",
                                  "Urdu",
                                  "Physics",
                                  "Computer",
                                  "PS",
                                  "Maths",
                                ]}
                              >
                                ICS
                              </option>
                              <option value="I.com">I.Com</option>
                            </>
                          )}
                        </select>{" "}
                        {formik.errors.subjects && (
                          <div className="text-center fw-bold text-danger">
                            {formik.errors.subjects}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-outline-dark"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        To Fetch Single Student
                      </button>
                      <button
                        className="btn btn-dark"
                        type="submit"
                        data-bs-dismiss={formik.values.class !== "" && "modal"}
                      >
                        Fetch Class
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div
              className="modal fade"
              id="exampleModalToggle2"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel2"
              tabIndex={-1}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalToggleLabel2">
                      Fetch Single Student
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setFetchStudentRollNo("")}
                    />
                  </div>
                  <div className="modal-body">
                    <label htmlFor="rollNo" className="form-label fw-normal">
                      Roll No.
                    </label>
                    <input
                      className="form-control"
                      id="rollNo"
                      type="number"
                      min={21000}
                      max={99999}
                      placeholder="Enter Student's Roll No."
                      value={fetchStudentRollNo}
                      onChange={(e) => setFetchStudentRollNo(e.target.value)}
                    />
                  </div>
                  <div className="modal-footer">
                    <div className="row">
                      <div className="col">
                        <div className="text-left">
                          <button
                            className="btn btn-outline-dark"
                            data-bs-target="#exampleModalToggle"
                            data-bs-toggle="modal"
                          >
                            Back to Fetch Full Class
                          </button>
                          <button
                            className="btn btn-dark ms-3"
                            data-bs-dismiss={
                              fetchStudentRollNo !== "" && "modal"
                            }
                            onClick={() =>
                              fetchSingleStudent(fetchStudentRollNo)
                            }
                          >
                            Fetch Student
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Students;
