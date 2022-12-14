import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";


const Lectures = () => { 

  const [lect, setLect] = useState([]);

  useEffect(() => {
    axios.get("https://masailms-clone.herokuapp.com/lectures").then((res) => {
       setLect(res.data);
       console.log(res.data)
    })
  },[])


  return (
    <div>
           <Navbar/>  
       <hr />
      <div className="divcc">
        <div className="Tickets">
          <h2 className="h22">Lectures</h2>
        </div>
      </div>
      {lect.map((ele) => {
        return (
          <div className="Ass_main">
        <div className="Assi">
          <div className="all_lect">
            <div className="detls">
              <h3>
                {ele.title}
                <button className="fullstack">{ele.category}</button>
              </h3>
              <p>
                <strong>{ele.Instrutor}</strong> Created
                <strong>{ele.Type}</strong> at {ele.Scheduled}
              </p>
            </div>
            <div className="details">
              <button id="btn1">New</button>
            </div>
          </div>
          </div>
          </div>
        )
      })}
    
    </div>
  );
};

export default Lectures;
