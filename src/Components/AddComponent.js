import React, { useState } from "react";
import "../Stylesheets/Style.css";

function AddComponent() {
  let newDate = new Date();
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

  let leaderObject = {};
  let leaderboardArray = [];
  for (let i in allOptions) {
    leaderObject["name"] = allOptions[i];
    leaderObject["points"] = 0;
    leaderboardArray.push(leaderObject);
    leaderObject = {};
  }

  const [text, settext] = useState("");
  const [points, setpoint] = useState("");
  const [useroption, setoption] = useState("");

  const [componentArray, addComponent] = useState([]);

  const [leaderArray, addLeaderDetails] = useState(leaderboardArray);
  const addVote = () => {
    if (text && points && useroption) {
      let obj = {
        id: componentArray.length,
        datesub: newDate.getTime(),
        voter: text,
        option: useroption,
        points: points,
      };
      addLeaderDetails((leaderArray) =>
        leaderArray.map((object, index) => {
          if (object.name == useroption) {
            let tempPoints = parseInt(object.points) + parseInt(points);
            return { ...object, points: tempPoints };
          }
          // console.log(object);
          return object;
        })
      );

      addLeaderDetails((leaderArray) =>
        [...leaderArray].sort((a, b) => b.points - a.points)
      );
      // array.push(value);
      //push
      addComponent((componentArray) => [...componentArray, obj]);
      settext("");
      setoption("");
      setpoint("");
      // console.log(obj);
      // console.log(componentArray);
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
            id='username'
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
          <select
            className='options'
            value={useroption}
            onChange={(e) => setoption(e.target.value)}
          >
            <option value='' disabled>
              Choose Any one
            </option>
            {allOptions.map((options, index) => (
              <option key={index} value={options}>
                {options}
              </option>
            ))}
          </select>

          <button onClick={addVote} className='submit'>
            submit
          </button>
        </div>
        <div className='Leaderboard'>
          <h1 className=''>Leaderboard</h1>
          <table className='displayLeaderContainer'>
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>Top Score</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderArray.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>#{index + 1}</td>
                    <td>{element.name}</td>
                    <td>{element.points}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className='display'>
        <h2>All Votes</h2>
        <table className='displayContainer'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Voter</th>
              <th>option</th>
              <th>points</th>
            </tr>
          </thead>
          <tbody>
            {componentArray.map((element, index) => {
              return (
                <tr key={index}>
                  <td>
                    {new Date(element.datesub).toLocaleDateString()}
                    {", "}
                    {new Date(element.datesub).toLocaleTimeString()}{" "}
                  </td>
                  <td>{element.voter}</td>
                  <td>{element.option}</td>
                  <td>{element.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AddComponent;
