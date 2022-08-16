import React from "react";
import ButtonLoader from "../../components/buttonLoader/ButtonLoader";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./AddMarks.css";
import useAddMarks from "./useAddMarks";
const AddMarks = () => {
  const {
    formik,
    fetchLoader,
    studentsList,
    subjectsList,
    onChangeHandlerForTotalMarks,
  } = useAddMarks();
  let i;
  return (
    <div className="AddMarksContainer d-flex flex-column">
      <header>
        <Navbar />
      </header>
      <main>
        {fetchLoader ? (
          <div
            className="container-fluid d-flex justify-content-center align-items-center"
            style={{
              minHeight: "80vh",
            }}
          >
            <ButtonLoader />
          </div>
        ) : studentsList.length > 0 ? (
          <div className="container mt-4">
            <div className="text-center card border-dark">
              <h1 className="display-4">Add Marks</h1>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    Total Marks
                  </th>
                  <th scope="col" className="text-center">
                    for
                  </th>
                  <th scope="col" className="text-center">
                    Each Subject
                  </th>
                  {subjectsList.map((subject, index) => {
                    return (
                      <th key={index} scope="col" className="text-center">
                        <input
                          type="number"
                          className="form-control"
                          name={subject}
                          placeholder={subject}
                          onChange={(e) => {
                            onChangeHandlerForTotalMarks(e, index);
                          }}
                        />
                      </th>
                    );
                  })}
                </tr>
              </thead>
            </table>
          </div>
        ) : (
          <div className="text-center mt-5">
            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Fetch Class to Add Marks
            </button>
          </div>
        )}

        {/* The below code is a modal that is used to fetch the class of a student. */}
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
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add Class and Subjects to Fetch Class
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
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
                            value='[
                        "English",
                        "Urdu",
                        "Maths",
                        "IS",
                        "PS",
                        "Physics",
                        "Chemistry",
                        "Biology"
                      ]'
                          >
                            Biology Group
                          </option>
                          <option
                            value='[
                        "English",
                        "Urdu",
                        "Maths",
                        "IS",
                        "PS",
                        "Physics",
                        "Chemistry",
                        "Computer"
                      ]'
                          >
                            Computer Group
                          </option>
                        </>
                      )}
                      {/* Subjects for 10th Class */}
                      {formik.values.class === "10th" && (
                        <>
                          <option
                            value='[
                        "English",
                        "Urdu",
                        "Maths",
                        "IS",
                        "PS",
                        "Physics",
                        "Chemistry",
                        "Biology"
                      ]'
                          >
                            Biology Group
                          </option>
                          <option
                            value='[
                        "English",
                        "Urdu",
                        "Maths",
                        "IS",
                        "PS",
                        "Physics",
                        "Chemistry",
                        "Computer"
                      ]'
                          >
                            Computer Group
                          </option>
                        </>
                      )}
                      {/* Subjects for 1st Year */}
                      {formik.values.class === "1st-year" && (
                        <>
                          <option
                            value='[
                        "English",
                        "Urdu",
                        "Physics",
                        "Chemistry",
                        "IS",
                        "Biology"
                      ]'
                          >
                            FSc(Pre-Medical)
                          </option>
                          <option
                            value='[
                        "English",
                        "Urdu",
                        "Physics",
                        "Chemistry",
                        "IS",
                        "Maths"
                      ]'
                          >
                            FSc(Pre-Engineering)
                          </option>
                          <option
                            value='[
                        "English",
                        "Urdu",
                        "Physics",
                        "Computer",
                        "IS",
                        "Maths"
                      ]'
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
                            value='[
                        "English",
                        "Urdu",
                        "Physics",
                        "Chemistry",
                        "PS",
                        "Biology"
                      ]'
                          >
                            FSc(Pre-Medical)
                          </option>
                          <option
                            value='[
                        "English",
                        "Urdu",
                        "Physics",
                        "Chemistry",
                        "PS",
                        "Maths"
                      ]'
                          >
                            FSc(Pre-Engineering)
                          </option>
                          <option
                            value='[
                        "English",
                        "Urdu",
                        "Physics",
                        "Computer",
                        "PS",
                        "Maths"
                      ]'
                          >
                            ICS
                          </option>
                          <option value="I.com">I.Com</option>
                        </>
                      )}
                    </select>
                    {formik.errors.subjects && (
                      <div className="text-center fw-bold text-danger">
                        {formik.errors.subjects}
                      </div>
                    )}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="reset"
                    className="btn btn-outline-dark"
                    data-bs-dismiss="modal"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn btn-dark"
                    data-bs-dismiss={
                      formik.values.class !== "" &&
                      formik.values.subjects !== "" &&
                      "modal"
                    }
                  >
                    Fetch Class
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default AddMarks;
