import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ButtonLoader from "../../components/buttonLoader/ButtonLoader";
import { Link } from "react-router-dom";
import useAdmins from "./useAdmins";

const Admins = () => {
  const {
    adminsList,
    fetchLoader,
    adminFetching,
    adminDeleting,
    buttonLoader,
  } = useAdmins();
  return (
    <div className="d-flex flex-column studentsContainer">
      <Navbar />
      <main>
        {" "}
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <Link to="/add-admins">
                <button className="btn btn-outline-dark my-4 px-5">
                  Add Admins
                </button>
              </Link>
            </div>
          </div>
          <div className="border-bottom border-secondary mt-3 w-75 m-auto"></div>
          <div className="row">
            <div className="col">
              <h1 className="display-5 text-center">List of Admins</h1>
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
          ) : adminsList.length > 0 ? (
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
                    Role
                  </th>

                  <th scope="col" className="text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {adminsList.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center">{index + 1}</td>
                      <td className="text-center">{item.name}</td>
                      <td className="text-center">{item.fatherName}</td>
                      <td className="text-center text-capitalize">
                        <span className="btn btn-success btn-sm rounded-pill px-3">
                          {item.role}
                        </span>
                      </td>

                      <td className="text-center">
                        <button
                          className="btn btn-outline-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-outline-danger mx-2"
                          onClick={() => adminDeleting(item.uid)}
                          disabled={buttonLoader}
                        >
                          {buttonLoader ? (
                            <ButtonLoader color="red" size={12} />
                          ) : (
                            "Delete"
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="text-center my-5">
              <button
                className="btn btn-outline-dark px-3"
                onClick={adminFetching}
              >
                Fetch Admins
              </button>
            </div>
          )}
        </div>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Admins;
