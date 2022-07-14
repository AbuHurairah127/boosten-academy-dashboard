import React from "react";
import Footer from "./../../components/footer/Footer";
import Navbar from "./../../components/navbar/Navbar";
const Home = () => {
  return (
    <div className="d-flex flex-column homeContainer">
      <Navbar />
      <main>Dash board home page</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
