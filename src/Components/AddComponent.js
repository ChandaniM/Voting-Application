import React from "react";
import "../Stylesheets/Style.css";
function AddComponent() {
  const allOptions = [
    "The Office",
    "Trailer Park Boys",
    "Shrek",
    "Rick And Morty",
    "Brooklyn 99",
    "Parks and Recreation",
    "F.R.I.E.N.D.S",
    "Bojack Horseman",
  ];
  return (
    <div className='container'>
      <h1>Votiong application</h1>
      <div className='votingContainer'>
        <div className=''>
          <p>Your name</p>
          <input type='text' className='' placeholder='Enter your name' />
        </div>
        <div className=''>
          <p>Points(1-100)</p>
          <input type='number' className='' placeholder='Points' />
        </div>
        <div className=''>
          <p className=''>Option</p>
          <select>
            <option value={allOptions}>{allOptions[0]}</option>
            <option value={allOptions}>{allOptions[1]}</option>
            <option value={allOptions}>{allOptions[2]}</option>
            <option value={allOptions}>{allOptions[3]}</option>
            <option value={allOptions}>{allOptions[4]}</option>
            <option value={allOptions}>{allOptions[5]}</option>
            <option value={allOptions}>{allOptions[6]}</option>
            <option value={allOptions}>{allOptions[7]}</option>
          </select>
        </div>
        <button>submit</button>
      </div>
    </div>
  );
}
export default AddComponent;
