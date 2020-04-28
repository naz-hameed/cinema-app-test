import React from "react";
//import HeroImage from "./HeroImage";
import CinemaSchedule from "./CinemaSchedule";
import LatestFilmCarousel from "./LatestFilmCarousel";
import LatestFilmCoverFlow from "./LatestFilmCoverFlow"

const ScheduleForm = () => {
  return (
      <div className='form'>
        <h1>Schedule</h1>
        <CinemaSchedule />
        <br />
        <LatestFilmCoverFlow />

        <br />
        <br />
      </div>
  );
};

export default ScheduleForm;


//        <LatestFilmCarousel />