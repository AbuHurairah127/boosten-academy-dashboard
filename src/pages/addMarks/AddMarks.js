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
      <main></main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default AddMarks;
