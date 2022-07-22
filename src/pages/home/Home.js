import React from "react";
import Footer from "./../../components/footer/Footer";
import Navbar from "./../../components/navbar/Navbar";
import { useSelector } from "react-redux";
const Home = () => {
  const students = useSelector((store) => store.studentReducer.students);
  return (
    <div className="d-flex flex-column homeContainer">
      <Navbar />
      <main>
        {" "}
        <div className="container">
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
                  Fee Status
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
                    <td className="text-center">{item.fee}</td>

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

export default Home;
