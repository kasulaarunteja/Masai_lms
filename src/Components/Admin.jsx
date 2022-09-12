import React from "react";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [admin, setAdmin] = useState({});
  const [data, setData] = useState({});
  const [lectdata, setLectdata] = useState({});
  const [ldata, setLdata] = useState({});



  const handleChange1 = (ele) => {
    //console.log(ele.target)
    const {id, value} = ele.target;
    setLectdata({ ...lectdata, [id]: value });
  };
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAdmin({ ...admin, [id]: value });
  };

  const postData = (e) => {
      e.preventDefault();
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .post(
        "https://masailms-clone.herokuapp.com/assignment",
        admin,
        axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });

    if(data){
     alert("Assignment is Added")
    }
  };

  const postData1 = (e) => {
       e.preventDefault();
       let axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      };
      axios
        .post(
          "https://masailms-clone.herokuapp.com/lectures",
          lectdata,
          axiosConfig
        )
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
      // if(ldata){
      //  alert("Lectures is Added")
      // }
  }

  

  return (
    <>
      <Navbar />
      <hr />
      <div className="divcc">
        <div className="Tickets">
          <h2 className="h22">Assignment</h2>
        </div>
      </div>

      {/* add assigments */}
      <h2 className="ti">Add Assignments</h2>
      <div className="main-admin-div">
        <div className="title-div">
          <p>Title</p>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="mid-div">
          <div>
            <p>Category</p>
            <select name="" id="category" onChange={handleChange}>
              <option value="">Choose</option>
              <option value="Coding">Coding</option>
              <option value="Fullstack">Fullstack</option>
              <option value="Dsa">Dsa</option>
              <option value="Oj">Oj</option>
            </select>
          </div>
          <div>
            <p>TYPE</p>
            <select name="" id="Type" onChange={handleChange}>
              <option value="">Choose</option>
              <option value="Project">Project</option>
              <option value="Practice">Practice</option>
              <option value="Assignment">Assignment</option>
              <option value="Evaluation">Evaluation</option>
            </select>
          </div>
          <div>
            <p>Instructor</p>
            <select name="" id="Instrutor" onChange={handleChange}>
              <option value="">Choose</option>
              <option value="Swanand">Swanand</option>
              <option value="Rahul">Rahul</option>
              <option value="Sobin O">Sobin O</option>
              <option value="Nrupul">Nrupul</option>
              <option value="Vishakha">Vishakha</option>
              <option value="Albert">Albert</option>
            </select>
          </div>
        </div>
        <div className="mid-div">
          <div>
            <p>Scheduled</p>
            <input type="date" id="date" onChange={handleChange} />
          </div>
          <div>
            <p>Optional</p>
            <select name="" id="optional" onChange={handleChange}>
              <option value="">Choose</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <p>Time</p>
            <input type="time" id="time" onChange={handleChange} />
          </div>
        </div>
        <button onClick={postData}>Add</button>
      </div>

      <br />
      <br />
      {/* add lectures to */}

      <h2 className="ti">Add Lectures</h2>
      <div className="main-admin-div">
        <div className="title-div">
          <p>Title</p>
          <input type="text" id="title" onChange={handleChange1} />
        </div>
        <div className="mid-div">
          <div>
            <p>Category</p>
            <select name="" id="category" onChange={handleChange1}>
              <option value="">Choose</option>
              <option value="Scrum">Scrum</option>
              <option value="General">General</option>
              <option value="Skillathon">Skillathon</option>
              <option value="Coading">Coading</option>
            </select>
          </div>
          <div>
            <p>TYPE</p>
            <select name="" id="Type" onChange={handleChange1}>
              <option value="">Choose</option>
              <option value="Live">Live</option>
              <option value="Video">Video</option>
              <option value="Reading">Reading</option>
            </select>
          </div>
          <div>
            <p>Instructor</p>
            <select name="" id="Instrutor" onChange={handleChange1}>
              <option value="">Choose</option>
              <option value="Swanand">Swanand</option>
              <option value="Rahul">Rahul</option>
              <option value="Sobin O">Sobin O</option>
              <option value="Nrupul">Nrupul</option>
              <option value="Vishakha">Vishakha</option>
              <option value="Albert">Albert</option>
            </select>
          </div>
        </div>
        <div className="mid-div">
          <div>
            <p>Scheduled</p>
            <input type="date" id="date" onChange={handleChange1} />
          </div>
          <div>
            <p>Optional</p>
            <select name="" id="optional" onChange={handleChange1}>
              <option value="">Choose</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <p>Time</p>
            <input type="time" id="time" onChange={handleChange1} />
          </div>
        </div>
        <button onClick={postData1}>Add</button>
      </div>
    </>
  );
};

export default Admin;
