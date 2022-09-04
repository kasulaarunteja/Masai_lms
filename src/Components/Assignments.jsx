import React from 'react'

const Assignment = () => {
  return (
    <div>
      <hr />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Assignments
          </h2>
        </div>
      </header>


      <div className='Ass_main'>
        <div className='Assi'>
          <div className="all_lect">
            <div className="detls">
              <h3>Thrive - Week 4  <button className='fullstack'>FULL_STACK</button></h3>
              <p>
                <strong>Arun Teja</strong> Created 
                <strong>Assignments Problems</strong> at 10 Aug, 22 - 9:00 Am
              </p>
            </div>
            <div className="details">
              <button id="btn1">New</button>
              <div><p>0/1</p></div>
            </div>
          </div>

          <hr/>

          <div className="all_lect">
            <div className="detls">
              <h3>Thrive - Week   <button className='fullstack'>Frontend</button></h3>
              <p>
                <strong>Arun Teja</strong> Created 
                <strong>Assignments Problems</strong> at 10 Aug, 22 - 9:00 Am
              </p>
            </div>
            <div className="details">
              <button id="btn1">Completed</button>
              <div><p>0/1</p></div>
            </div>
          </div>

             <hr/> 
            
          <div className="all_lect">
            <div className="detls">
              <h3>Thrive - Week 2  <button className='fullstack'>Backend</button></h3>
              <p>
                <strong>Arun Teja</strong> Created 
                <strong>Assignments Problems</strong> at 10 Aug, 22 - 9:00 Am
              </p>
            </div>
            <div className="details">
              <button id="btn1">Completed</button>
              <div><p>0/1</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assignment
