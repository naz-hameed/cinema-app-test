import React, { useState, useEffect } from "react";
import axios from "axios";


const OpeningHours = () => {
  const [opening, setOpening] = useState(null);

  useEffect(() => {
    if(!opening) {
      getOpening();
    }
  })

  const getOpening = async () => {
    let result = await axios.get('/opening');
    console.log(result.data || []);
    setOpening(result.data || []);
  }


  const renderOpening = opening => {
    return (
            <tr key={opening.id}>
              <td>{opening.day}</td>
              <td>
                {opening.times[0]}
              </td>
             </tr>
    );
  };

  return (
    <div className="OpeningTimes">
      <div id="hours-title">
        <h3>Cinema Opening Hours</h3>
      </div>
      <table border="1" id="hourstable">
          <thead>
            <tr>
               <th id = "days">Days</th>
               <th id = "times">Times</th>
            </tr>
          </thead>  
          <tbody>
            {(opening && opening.length > 0) ? (
              opening.map(entry => renderOpening(entry))
              ) : (
                <>
                <td>Not found</td>
                <td>Not found</td>
                </>
              )
            }
          </tbody>
        </table>
    </div>
  );

};




// const OpeningHours = () => {
//   const [hourstable, setHoursTable] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       let response = await axios.get("http://localhost:5000/hourstable");
//       let hourstable = await response.data;
//       setHoursTable(hourstable);
//     };
//     getData();
//   }, []);

//   const openingList = hourstable.map((trading) => (
//     <>
//       <tr key={trading.id}>
//         <td>{trading.day}</td>
//         <td>
//           {trading.times[0]}
//         </td>
//       </tr>
//     </>
//   ));

//   return (
//     <div className="center-div">
//       <div id="hours-title">
//         <h3>Opening Hours</h3>
//       </div>
//       <table border="1" id="hourstable">
//         <thead>
//           <tr>
//             <th>Days</th>
//             <th>Times</th>
//           </tr>
//         </thead>
//         <tbody>{openingList}</tbody>
//       </table>
//     </div>
//   );
// };

export default OpeningHours;