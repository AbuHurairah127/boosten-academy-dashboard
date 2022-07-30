import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./../pages/home/Home";
import AddStudents from "./../pages/addStudents/AddStudent";
import Login from "../pages/auth/login/Login";
import Students from "../pages/students/Students";
import Admins from "../pages/admins/Admins";
import AddAdmins from "../pages/addAdmins/AddAdmins";
import PrivateRoutes from "./PrivateRoutes";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Routing = () => {
  const isUserAuthenticated = useSelector(
    (store) => store.authReducer.isUserAuthenticated
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isUserAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/" element={<PrivateRoutes Component={Home} />} />
        <Route
          path="/add-students"
          element={<PrivateRoutes Component={AddStudents} />}
        />
        <Route
          path="/add-admins"
          element={<PrivateRoutes Component={AddAdmins} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/students"
          element={<PrivateRoutes Component={Students} />}
        />
        <Route path="/admins" element={<PrivateRoutes Component={Admins} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
