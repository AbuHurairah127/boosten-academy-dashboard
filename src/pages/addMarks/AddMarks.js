import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./AddMarks.css";
const AddMarks = () => {
  return (
    <div className="AddMarksContainer d-flex flex-column">
      <header>
        <Navbar />
      </header>
      <main>
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
              <form action="">
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="reset"
                    className="btn btn-outline-dark"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-dark">
                    Understood
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
