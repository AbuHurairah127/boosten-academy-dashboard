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
        <h1 className="text-center display-5">Home of Dashboard</h1>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
