import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import useMarkAttendance from "./useMarkAttendance";
import ButtonLoader from "../../components/buttonLoader/ButtonLoader";
import { AiFillCheckCircle } from "react-icons/ai";
const MarkAttendance = () => {
  const {
    fetchLoader,
    students,
    attendance,
    today,
    onDateChangeHandler,
    setToday,
    fetchStudents,
  } = useMarkAttendance();

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
                <div className="col-5">
                  <label htmlFor="date" className=" fs-5">
                    Select Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setToday(e.target.value)}
                    id="date"
                  />
                </div>
                <div className="col-1 align-self-end">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      setToday(e.target.value);
                    }}
                  >
                    <AiFillCheckCircle size={21} />
                  </button>
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
                type="submit"
                className="btn btn-outline-dark"
                onClick={fetchStudents}
              >
                Fetch Students
              </button>
            </div>
          )}
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
