import React from "react";
import CinemaSchedule from "./CinemaSchedule";
import LatestFilmCarousel from "./LatestFilmCarousel";
import OpeningHours from "./OpeningHours";

const ScheduleForm = () => {
  return (
    <div class="form">
      <h1>Schedule</h1>

      <OpeningHours />
      <br />
      <CinemaSchedule />
      <br />
      <LatestFilmCarousel />
      <br />
      <br />
    </div>
  );
};

export default ScheduleForm;
