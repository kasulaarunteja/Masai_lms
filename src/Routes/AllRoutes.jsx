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
import BookMarks from "../Components/BookMarks";
import Admin from "../Components/Admin";
import Singup from "../Components/Singup";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singup" element={<Singup/>}/>
        <Route path="/dashboard" element={<ToSchedule/>}/>
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/Assignments" element={<Assignment />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/electives" element={<Electives />} />
        <Route path="/electives/catalog" element={<ElectivesCatalog />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tickets/create" element={<CreateTickets />} />
        <Route path="/Bookmarks" element={<BookMarks/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;
