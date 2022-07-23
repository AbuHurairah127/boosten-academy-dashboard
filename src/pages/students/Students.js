import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import "./students.css";
const Students = () => {
  const students = useSelector((store) => store.studentReducer.students);
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
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((item, index) => {
                return (
                  <tr scope="row">
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.fatherName}</td>
                    <td className="text-center">{item.rollNo}</td>
                    <td className="text-center">{item.class}</td>

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
        </div>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Students;
