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


  const renderSchedule = showing => {

    return (
      <>
      <tr key={showing.cinemaTimesId}>
      <td>{showing.movie}</td>
      <td>
        {showing.times[0][0]} <br />
        {showing.times[0][1]} <br />
        {showing.times[0][2]}
      </td>
      <td>
        {showing.times[1][0]} <br />
        {showing.times[1][1]} <br />
        {showing.times[1][2]}
      </td>
      <td>
        {showing.times[2][0]} <br />
        {showing.times[2][1]} <br />
        {showing.times[2][2]}
      </td>       
      <td>
        {showing.times[3][0]} <br />
        {showing.times[3][1]} <br />
        {showing.times[3][2]}
      </td> 
      <td>
        {showing.times[4][0]} <br />
        {showing.times[4][1]} <br />
        {showing.times[4][2]}
      </td>       <td>
        {showing.times[5][0]} <br />
        {showing.times[5][1]} <br />
        {showing.times[5][2]}
      </td> 
      <td>
        {showing.times[6][0]} <br />
        {showing.times[6][1]} <br />
        {showing.times[6][2]}
      </td> 
      </tr>
      </>
    );
  };

  return (
    <div className="CinemaSchedule">
      <div id="schedule-title">
        <h3>Show Times</h3>
      </div>
      <table border="1" id="scheduletable">
          <thead>
            <tr>
              <th>Movie</th>
              <th>Mon</th>
              <th>Tues</th>
              <th>Wed</th>
              <th>Thurs</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
          </thead>  
          <tbody>
            {(schedule && schedule.length > 0) ? (
              schedule.map(entry => renderSchedule(entry))
              ) : (
                <>
                  <td>Not found</td>
                  <td>Not found</td>
                  <td>Not found</td>
                  <td>Not found</td>
                </>
              )
            }
          </tbody>
        </table>
    </div>
  );

// the old way of doing things

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

