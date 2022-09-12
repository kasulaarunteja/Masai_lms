import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  if (login) {
    navigate("/dashboard");
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLogin(false);
    axios
      .post("https://masailms-clone.herokuapp.com/login", user)
      .then((res) => {
        // console.log(res);
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setLogin(true);
        alert("login successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="Login">
        <div className="form_container1">
          <div className="img_div">
            <img className="img" src="img/masai.png" alt="" />
          </div>
          <h2>Login</h2>
          <form onSubmit={handleClick} className="form1">
            <label className="label" id="lab">
              Email
            </label>
            <br />
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={user.email}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
            <br />
            <label className="label" id="lab">
              Password
            </label>
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              value={user.password}
              onChange={handleChange}
            />
            <h4>Don't Have an account?
              <a href="/singup">Sing Up</a>
              </h4>

              <button
              className="subbtn"
              type="submit"
              onClick={handleClick}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
