import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link className="links" to={"/dashboard"}>
        <img className="img" src="img/masai.png" alt="" />
      </Link>
      <Link className="links" to={"/lectures"}>
        <p className="title">Lectures</p>
      </Link>
      <Link className="links" to={"/assignments"}>
        <p className="title">Assignments</p>
      </Link>
      <Link className="links" to={"/admin"}>
        <p className="title">Admin</p>
      </Link>
      <Link className="links" to={"/tickets"}>
        <p className="title">Tickets</p>
      </Link>
      <Link className="links" to={"/discussions"}>
        <p className="title">Discussions</p>
      </Link>
      <Link className="links" to={"/notifications"}>
        <p className="title">Notifications</p>
      </Link>
      <Link className="links" to={"/electives"}>
        <p className="title">Electives</p>
      </Link>
      <div></div>
    </div>
  );
};

export default Navbar;
