import React from 'react';
import HeroImage from './HeroImage';
import CinemaSchedule from './CinemaSchedule';
import LatestFilmCarousel from './LatestFilmCarousel';

const ScheduleForm = () => {
    return (
        <div class='form'>
            <h1>Schedule</h1>
            <HeroImage />
            <br />
            <br />
            <CinemaSchedule />
            <br />
            <LatestFilmCarousel />
            <br />
            <br />
        </div>

    )
};

export default ScheduleForm;