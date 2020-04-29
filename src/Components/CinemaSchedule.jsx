import React, { useState, useEffect } from "react";
import axios from "axios";


const CinemaSchedule = () => {
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    if(!schedule) {
      getSchedule();
    }
  })

  const getSchedule = async () => {
    let result = await axios.get('/schedule');
    console.log(result.data || []);
    setSchedule(result.data || []);
  }


  const renderSchedule = schedule => {
    getSchedule();
    return (
      <li key={schedule.cinemaTimesId}>
        <h3>{schedule.movie}</h3>
      </li>
    );
  };

  return (
    <div className="CinemaSchedule">
      <ul className="list">
        {(schedule && schedule.length > 0) ? (
          schedule.map(entry => renderSchedule(entry))
        ) : (
          <p>No schedules found</p>
        )}
      </ul>
    </div>
  );

  // const scheduleList = scheduleable.map((showing) => (
  //   <>
  //     <tr key={showing.cinemaTimesId}>
  //       <td>{showing.movie}</td>
  //       <td>
  //         {showing.times[0][0]} <br />
  //         {showing.times[0][1]} <br />
  //         {showing.times[0][2]}
  //       </td>
  //       <td>
  //         {showing.times[1][0]} <br />
  //         {showing.times[1][1]} <br />
  //         {showing.times[1][2]}
  //       </td>
  //       <td>
  //         {showing.times[2][0]} <br />
  //         {showing.times[2][1]} <br />
  //         {showing.times[2][2]}
  //       </td>
  //     </tr>
  //   </>
  // ));




  // return (
  //   <div className="center-div">
  //     <div id="schedule-title">
  //       <h3>Show Times</h3>
  //     </div>
  //     <table border="1" id="scheduletable">
  //       <thead>
  //         <tr>
  //           <th>Movie</th>
  //           <th>Mon</th>
  //           <th>Tues</th>
  //           <th>Wed</th>
  //         </tr>
  //       </thead>
  //       <tbody>{scheduleList}</tbody>
  //     </table>
  //   </div>
  // );
};

export default CinemaSchedule;

/*{ <ul>
{scheduletable.map((movies) => (
  <li key={movies.id}>{movies.movie}{movies.times}</li>
))}
</ul> }*/