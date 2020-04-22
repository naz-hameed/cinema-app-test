import React from 'react';
import HeroImage from './HeroImage';
import CinemaSchedule from './CinemaSchedule';
import LatestFilmCarousel from './LatestFilmCarousel';

const ScheduleForm = () => {
    return (
        <div>
            <br />
            <HeroImage />
            <CinemaSchedule />
            <br />
            <LatestFilmCarousel />
            <br />
        </div>

    )
};

export default ScheduleForm;