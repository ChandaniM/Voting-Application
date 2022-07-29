function VoterComponent({ voterArray }) {
  return (
    <div className='display'>
      <h2>All Votes</h2>
      <table className='displayContainer'>
        <thead>
          <tr>
            <th className='votehead'>Date</th>
            <th className='votehead'>Voter</th>
            <th className='votehead'>Option</th>
            <th className='votehead'>Points</th>
          </tr>
        </thead>
        {voterArray.length > 0 ? (
          <tbody>
            {voterArray.map((element, index) => {
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
        ) : (
          ""
        )}
      </table>
    </div>
  );
}
export default VoterComponent;
