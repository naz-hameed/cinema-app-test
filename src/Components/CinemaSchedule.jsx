import React from 'react';
import scheduleTable from './scheduletable.json';

const CinemaSchedule = () => {
    const scheduleList = scheduleTable.map(showing => 
        <>
         <tr key = {showing.id}>
            <td>{showing.movie}</td>
            <td>{showing.times[0][0]} <br />{showing.times[0][1]} <br />{showing.times[0][2]}</td>
            <td>{showing.times[1][0]} <br />{showing.times[1][1]} <br />{showing.times[1][2]}</td>
            <td>{showing.times[2][0]} <br />{showing.times[2][1]} <br />{showing.times[2][2]}</td>
         </tr>
         </>
    );
    
    return (
        <div className="center-div">
            <div id = "schedule-title"><h3>Schedule</h3></div>
            <table border="1" id="scheduletable">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Mon</th>
                        <th>Tues</th>
                        <th>Wed</th>
                    </tr>
                </thead>
                <tbody>{scheduleList}</tbody>
            </table>
        </div>
    );
    }
    
    export default CinemaSchedule;