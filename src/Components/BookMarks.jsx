import React from "react";
import Navbar from "./Navbar";

const BookMarks = () => {
  return (
    <>
    <Navbar/>
      <hr />
      <div className="divcc">
        <div className="BookMarks">
          <h2 className="h22">BookMarkst</h2>
        </div>
      </div>

      <h3 className="h33333">Lectures</h3>
      <div className="bookmarks">
        <div className="blect">
          <p>TITLE</p>
          <p>AUTHOR</p>
          <p>SHEDULE</p>
        </div>
        <hr />
        <div>
          <p>No Bookmarks Found</p>
        </div>
      </div>
      <h3 className="h33333">Assignments</h3>
      <div className="bookmarks">
        <div className="blect">
          <p>TITLE</p>
          <p>AUTHOR</p>
          <p>SHEDULE</p>
        </div>
        <hr />
        <div>
          <p>No Bookmarks Found</p>
        </div>
      </div>
    </>
  );
};

export default BookMarks;
