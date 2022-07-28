import React, { useState } from "react";
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

  const [text, settext] = useState("");
  const [points, setpoint] = useState("");

  const array = [];
  const [componentArray, addComponent] = useState([]);
  const addVote = () => {
    if (text != "") {
      let obj = {
        id: componentArray.length,
        name: text,
        points: points,
      };
      // array.push(value);
      //push
      addComponent((componentArray) => [...componentArray, obj]);
      settext("");
    }
  };
  return (
    <div className='container'>
      <h1>Voting application</h1>
      <div className='subContainer'>
        <div className='votingContainer flex'>
          <h1>Voting Booth</h1>
          <span>Your name:</span>
          <input
            type='text'
            className='input'
            placeholder='Enter your name'
            value={text}
            onInput={(e) => settext(e.target.value)}
          />
          <span>Points(1-100)</span>
          <input
            type='number'
            className='input'
            placeholder='Points'
            value={points}
            onInput={(e) => setpoint(e.target.value)}
          />

          <span className='selectoptions'>Option</span>
          <select className='options'>
            <option value={allOptions}>{allOptions[0]}</option>
            <option value={allOptions}>{allOptions[1]}</option>
            <option value={allOptions}>{allOptions[2]}</option>
            <option value={allOptions}>{allOptions[3]}</option>
            <option value={allOptions}>{allOptions[4]}</option>
            <option value={allOptions}>{allOptions[5]}</option>
            <option value={allOptions}>{allOptions[6]}</option>
            <option value={allOptions}>{allOptions[7]}</option>
          </select>

          <button onClick={addVote} className='submit'>
            submit
          </button>
        </div>
        <div className='Leaderboard'>
          <h1 className=''>Leaderboard</h1>
          <div className='Leaderboard_display flex-space'>
            <div className='list'>
              <span>Top scroe option</span>
              <ol>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ol>
            </div>
            <div>
              <span className=''>Total Count</span>
            </div>
          </div>
        </div>
      </div>
      <div className='display'>
        <h1>All Votes</h1>
        <div className='displayContainer flex-space'>
          <div className=''>
            <span className=''>Date</span>
          </div>
          <div className=''>
            <span className=''>Voter</span>
          </div>
          <div className=''>
            <span className=''>Option</span>
          </div>
          <div className=''>
            <span className=''>Points</span>
          </div>
        </div>
        {componentArray.map((element, index) => (
          <div className='Outputcontainer' key={element.id}>
            <div className='out_box'>
              <span>{element.name}</span>
              <span>{element.points}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AddComponent;
