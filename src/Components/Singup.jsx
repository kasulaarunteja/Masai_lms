import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Singup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  }

  const [reg, setReg] = useState(false);

  if (reg) {
    navigate("/");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setReg(false);
    axios
      .post("https://masailms-clone.herokuapp.com/register", user)
      .then((res) => {
        console.log(res.data);
        setReg(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    
    <div className="HomePage">
      <div className="img_div">
            <img className="img" src="img/masai.png" alt="" />
        </div>
      <div className="inputs">
        <form onSubmit={handleSubmit}>
          <h2>Sing Up</h2>
          <label className="label1">Full Name</label> <br />
          <input type="text" className="input" placeholder='Enter Name'
                id="name" onChange={handleChange}
              />
          <br />
          <br />
          <label className="label1">Email</label> <br />
          <input
            className="input"
            type="email"
            name=""
            id="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />{" "}
          <br />
          <br />
          <div className="passwordref">
            <label className="label1">Password</label>
          </div>
          <br />
          <input
            className="input"
            type="password"
            name=""
            id="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <br /> <br />
          <button type="Submit" className="signup">
            SIGN UP
          </button>
          <br />
        </form>
        <div className="df1111">
          <p className="aaa">Already have an account?</p>
          <Link className="aalink" to={`/`}>
            <p className="login111">Sign In</p>
          </Link>{" "}
        </div>
      </div>
      <p className="aaaa">
        © 2022 by Masai School Privacy Policy & Terms and Conditions
      </p>
    </div>
  );
};

export default Singup;
