import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./../pages/home/Home";
import AddStudents from "./../pages/addStudents/AddStudent";
import Login from "../pages/auth/login/Login";
import Students from "../pages/students/Students";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-students" element={<AddStudents />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
