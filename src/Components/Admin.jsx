import React from "react";
import Popup from "reactjs-popup";

const Admin = () => {
  return (
    <>
      <hr />
      <div className="divcc">
        <div className="Tickets">
          <h2 className="h22">Assignment</h2>
        </div>
      </div>

      {/* add assigments */}
      <h2 className="ti">Add Assignments</h2>
      <div class="main-admin-div">
        <div class="title-div">
          <p>Title</p>
          <input type="text" id="title" />
        </div>
        <div class="mid-div">
          <div>
            <p>Category</p>
            <select name="" id="category">
              <option value="">Choose</option>
              <option value="Coding">Coding</option>
              <option value="Fullstack">Fullstack</option>
              <option value="Dsa">Dsa</option>
              <option value="Oj">Oj</option>
            </select>
          </div>
          <div>
            <p>TYPE</p>
            <select name="" id="type">
              <option value="">Choose</option>
              <option value="Project">Project</option>
              <option value="Practice">Practice</option>
              <option value="Assignment">Assignment</option>
              <option value="Evaluation">Evaluation</option>
            </select>
          </div>
          <div>
            <p>Instructor</p>
            <select name="" id="Instructor">
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
        <div class="mid-div">
          <div>
            <p>Scheduled</p>
            <input type="date" id="date" />
          </div>
          <div>
            <p>Optional</p>
            <select name="" id="optional">
              <option value="">Choose</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <p>Time</p>
            <input type="time" id="time" />
          </div>
        </div>
        <button>Add</button>
      </div>
        
        <br />
        <br />
      {/* add lectures to */}

      <h2 className="ti">Add Lectures</h2>
      <div class="main-admin-div">
        <div class="title-div">
          <p>Title</p>
          <input type="text" id="title" />
        </div>
        <div class="mid-div">
          <div>
            <p>Category</p>
            <select name="" id="category">
              <option value="">Choose</option>
              <option value="Scrum">Scrum</option>
              <option value="General">General</option>
              <option value="Skillathon">Skillathon</option>
              <option value="Coading">Coading</option>
            </select>
          </div>
          <div>
            <p>TYPE</p>
            <select name="" id="type">
              <option value="">Choose</option>
              <option value="Live">Live</option>
              <option value="Video">Video</option>
              <option value="Reading">Reading</option>
            </select>
          </div>
          <div>
            <p>Instructor</p>
            <select name="" id="Instructor">
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
        <div class="mid-div">
          <div>
            <p>Scheduled</p>
            <input type="date" id="date" />
          </div>
          <div>
            <p>Optional</p>
            <select name="" id="optional">
              <option value="">Choose</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <p>Time</p>
            <input type="time" id="time" />
          </div>
        </div>
        <button>Add</button>
      </div>
    </>
  );
};

export default Admin;
