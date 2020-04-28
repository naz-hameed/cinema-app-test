import React from "react";
import CinemaSchedule from "./CinemaSchedule";
// import LatestFilmCarousel from "./LatestFilmCarousel";
import OpeningHours from "./OpeningHours";
//import HeroImage from "./HeroImage";
import LatestFilmCoverFlow from "./LatestFilmCoverFlow"

const ScheduleForm = () => {
  return (
    <div className='form'>
      <h1>Schedule</h1>

      <OpeningHours />
      <br />
      <CinemaSchedule />
      <br />
      <LatestFilmCoverFlow />
      <br />
    </div>


// const ScheduleForm = () => {
//   return (
//       <div className='form'>
//         <h1>Schedule</h1>
//         <CinemaSchedule />
//         <br />
//         <LatestFilmCoverFlow />

//         <br />
//         <br />
//       </div>
  );
};

export default ScheduleForm;


//        <LatestFilmCarousel />