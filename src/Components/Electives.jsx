import React from "react";
import { Link } from "react-router-dom";

const Electives = () => {
  return (
    <>
      <hr />

      <div className="divcc">
        <div className="Electives">
          <h2 className="h22">Electives</h2>
          <Link to={"/electives/catalog"}>
            <h2>
              <button className="btns">CATALOG</button>
            </h2>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Electives;
