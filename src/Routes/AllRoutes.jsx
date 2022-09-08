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
import Tickets from "../Components/Tickets";
import CreateTickets from "../Components/CreateTickets";
import ToSchedule from "../Components/ToSchedule";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ToSchedule/>}/>
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/Assignments" element={<Assignment />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/electives" element={<Electives />} />
        <Route path="/electives/catalog" element={<ElectivesCatalog />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tickets/create" element={<CreateTickets />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
