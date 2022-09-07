import React from "react";
import { Routes, Route } from "react-router-dom";
import Assignment from "../Components/Assignments";
import Electives from "../Components/Electives";
import Discussions from "../Components/Discussions";
import Home from "../Components/Home";
import Lectures from "../Components/Lectures";
import Navbar from "../Components/Navbar";
import Notification from "../Components/Notification";
import ElectivesCatalog from "../Components/ElectivesCatallog";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/Assignments" element={<Assignment />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/electives" element={<Electives />} />
        <Route path="/electives/catalog" element={<ElectivesCatalog />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
