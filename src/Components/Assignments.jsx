import React from "react";
import Navbar from "../Components/Navbar";


const Assignment = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="divcc">
        <div className="Tickets">
          <h2 className="h22">Assignment</h2>
        </div>
      </div>

      <div className="Ass_main">
        <div className="Assi">
          <div className="all_lect">
            <div className="detls">
              <h3>
                Thrive - Week 4{" "}
                <button className="fullstack">FULL_STACK</button>
              </h3>
              <p>
                <strong>Arun Teja</strong> Created
                <strong>Assignments Problems</strong> at 10 Aug, 22 - 9:00 Am
              </p>
            </div>
            <div className="details">
              <button id="btn1">New</button>
              <div>
                <p>0/1</p>
              </div>
            </div>
          </div>

          <hr />

          <div className="all_lect">
            <div className="detls">
              <h3>
                Thrive - Week <button className="fullstack">Frontend</button>
              </h3>
              <p>
                <strong>Arun Teja</strong> Created
                <strong>Assignments Problems</strong> at 10 Aug, 22 - 9:00 Am
              </p>
            </div>
            <div className="details">
              <button id="btn1">Completed</button>
              <div>
                <p>0/1</p>
              </div>
            </div>
          </div>

          <hr />

          <div className="all_lect">
            <div className="detls">
              <h3>
                Thrive - Week 2 <button className="fullstack">Backend</button>
              </h3>
              <p>
                <strong>Arun Teja</strong> Created
                <strong>Assignments Problems</strong> at 10 Aug, 22 - 9:00 Am
              </p>
            </div>
            <div className="details">
              <button id="btn1">Completed</button>
              <div>
                <p>0/1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
