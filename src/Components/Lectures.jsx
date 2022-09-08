import React from "react";

const Lectures = () => {
  return (
    <div>
      <hr />
      <div className="divcc">
        <div className="Tickets">
          <h2 className="h22">Lectures</h2>
        </div>
      </div>

      <div className="lect_main">
        <div className="lectures">
          <div className="all_lect">
            <div className="detls">
              <h3>Scrum 09.08.2022 </h3>
              <p>
                {" "}
                <strong>Arun Teja</strong> Scheduled
                <strong>Scrum</strong> at 10 Aug, 22 - 9:00 Am
                <span className="live">live</span>
              </p>
            </div>
            <div className="details">
              <button id="btn">Present</button>
            </div>
          </div>
          <hr />
          <div className="all_lect">
            <div className="detls">
              <h3>DSA 10.08.2022 </h3>
              <p>
                {" "}
                <strong>Arun Teja</strong> Scheduled
                <strong>DSA</strong> at 10 Aug, 22 - 9:30 Am
                <span className="live">live</span>
              </p>
            </div>
            <div className="details">
              <button id="btn">Present</button>
            </div>
          </div>
          <hr />
          <div className="all_lect">
            <div className="detls">
              <h3>Scrum 11.08.2022 </h3>
              <p>
                {" "}
                <strong>Arun Teja</strong> Scheduled
                <strong>Scrum</strong> at 11 Aug, 22 - 10:00 Am
                <span className="live">live</span>
              </p>
            </div>
            <div className="details">
              <button id="btn">Present</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
