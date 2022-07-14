import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./../pages/home/Home";
import AddStudents from "./../pages/addStudents/AddStudent";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-students" element={<AddStudents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
