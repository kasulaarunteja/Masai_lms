
import React from "react";
import {Routes, Route} from "react-router-dom";
import Assignment from "../Components/Assignments";
import Home from "../Components/Home";
import Lectures from "../Components/Lectures";
import Navbar from "../Components/Navbar";



const AllRoutes = () =>{

    return (
      <>
      <Navbar/>
      <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/lectures" element = {<Lectures/>} />
          <Route path="/Assignments" element = {<Assignment/>}/>
        </Routes>
      </>
      
        
    )
}

export default AllRoutes;