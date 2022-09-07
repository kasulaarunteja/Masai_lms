import React from "react";
import {Link} from "react-router-dom";

const Tickets = () => {
  return (
    <>
    <hr/>
      <div className="divcc">
        <div className="Tickets">
          <h2 className="h22">Support Tickets</h2>
          <Link to={"/tickets/create"}>
            <h2>
              <button className="btns">CREATE</button>
            </h2>{" "}
          </Link>
        </div>
      </div>
      <div className="discus">
        <h2>
          <hr />
        </h2>
      </div>
    </>
  );
};

export default Tickets;
