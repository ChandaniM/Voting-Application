import React, { useState } from "react";
import "../Stylesheets/Style.css";
import Voter from "./VoterComponent";
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
  const [componentArray, addVoterDetails] = useState([]);

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
      addVoterDetails((componentArray) => [...componentArray, obj]);
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
            Give Points!
          </button>
        </div>
        <div className='Leaderboard'>
          <h2>Leaderboard</h2>
          <table className='displayLeaderContainer'>
            {/* <thead>
              <tr>
                <th>Sr.no</th>
                <th>Top Score</th>
                <th>Points</th>
              </tr>
            </thead> */}
            <tbody>
              {leaderArray.map((element, index) => {
                return (
                  <tr key={index}>
                    <td className='leadertd'>#{index + 1}</td>
                    <td className='leadernametd'>{element.name}</td>
                    <td>
                      {element.points}
                      {" Points"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Voter voterArray={componentArray} />
    </div>
  );
}
export default AddComponent;
