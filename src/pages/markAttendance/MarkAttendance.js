import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import useMarkAttendance from "./useMarkAttendance";
import ButtonLoader from "../../components/buttonLoader/ButtonLoader";

const MarkAttendance = () => {
  const { formik, fetchLoader, students } = useMarkAttendance();

  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="text-center mt-5">
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
            <div className="container">
              <h1 className="display-3">Mark Attendance</h1>
              <div className="row d-flex">
                <div className="col-6">
                  <label htmlFor="date" className=" fs-5">
                    Select Date
                  </label>
                  <input type="date" className="form-control" id="date" />
                </div>
                <div className="col-3 align-self-end">
                  <button className="btn btn-primary" type="button">
                    Mark All as Present
                  </button>
                </div>
                <div className="col-3 align-self-end">
                  <button className="btn btn-primary" type="button">
                    Mark All as Absent
                  </button>
                </div>
              </div>
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
                      Attendance
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
                        <td className="text-center">
                          <div className="d-flex justify-content-center">
                            <div className="form-check d-flex align-items-center justify-center">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="attendance"
                                  id="present"
                                  value="present"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="present"
                                >
                                  Present
                                </label>
                              </div>
                            </div>
                            <div className="form-check d-flex align-items-center justify-center">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="attendance"
                                  id="absent"
                                  value="absent"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="absent"
                                >
                                  Absent
                                </label>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="col text-center my-4">
              <button
                type="button"
                className="btn btn-outline-dark"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Fetch Students
              </button>
            </div>
          )}
        </div>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title display-5 fs-4"
                  id="staticBackdropLabel"
                >
                  Fetch Class to Mark Attendance
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
                    required
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
                  type="button"
                  className="btn btn-outline-dark"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  data-bs-dismiss={
                    formik.values.class && formik.values.class && "modal"
                  }
                  className="btn btn-dark"
                  onClick={formik.handleSubmit}
                >
                  Fetch
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
      {/* Modal Code */}
    </div>
  );
};

export default MarkAttendance;
