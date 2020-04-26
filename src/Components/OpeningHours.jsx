import React, { useState, useEffect } from "react";
import axios from "axios";

const OpeningHours = () => {
  const [hourstable, setHoursTable] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get("http://localhost:5000/hourstable");
      let hourstable = await response.data;
      setHoursTable(hourstable);
    };
    getData();
  }, []);

  const openingList = hourstable.map((trading) => (
    <>
      <tr key={trading.id}>
        <td>{trading.day}</td>
        <td>
          {trading.times[0]}
        </td>
      </tr>
    </>
  ));

  return (
    <div className="center-div">
      <div id="hours-title">
        <h3>Opening Hours</h3>
      </div>
      <table border="1" id="hourstable">
        <thead>
          <tr>
            <th>Days</th>
            <th>Times</th>
          </tr>
        </thead>
        <tbody>{openingList}</tbody>
      </table>
    </div>
  );
};

export default OpeningHours;