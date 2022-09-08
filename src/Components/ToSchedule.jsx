import React from "react";
import { Link } from "react-router-dom";

const ToSchedule = () => {
  return (
    <>
      <hr />
      <div className="divcc">
        <div className="Schedule">
          <h2>Today's Schedule</h2>
          <div className="btnss">
            <Link to={`/bookmarks`}>
              <h2>
                <button className="btns">Bookmarks</button>
              </h2>
            </Link>
            <Link to={`/login`}>
              <h2>
                <button className="btns">Refer & Earn</button>
              </h2>
            </Link>
          </div>
        </div>
      </div>

      <div className="Toschules">
        <div className="all_lects">
          <div className="lects">
            <h4>9:00 AM</h4>
            <h4>LECTURE</h4>
          </div>
          <div className="detls">
            <h3>Scrum 10:.09.2022</h3>
            <p>
              <strong>Arun Teja</strong> Starting at<strong>9:00 AM</strong>
            </p>
            <div className="btnsdiv">
              <button className="dbtns">scrum</button>
              <button className="dbtnss">live</button>
            </div>
            {/* <div className='details'>Details </div> */}
          </div>
        </div>
        <hr/>
        <div className="all_lects">
          <div className="lects">
            <h4>9:30 AM</h4>
            <h4>LECTURE</h4>
          </div>
          <div className="detls">
            <h3>DSA 10:.09.2022</h3>
            <p>
              <strong>Arun</strong> Starting at<strong>9:30 AM</strong>
            </p>
            <div className="btnsdiv">
              <button className="dbtns">scrum</button>
              <button className="dbtnss">live</button>
            </div>
            {/* <div className='details'>Details </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToSchedule;
