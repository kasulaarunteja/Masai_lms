import React from "react";
import Navbar from "./Navbar";


const Notification = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Notification
          </h2>
        </div>
      </header>

      <div className="discus">
        <h2>
          <hr />
        </h2>
      </div>
    </div>
  );
};

export default Notification;
