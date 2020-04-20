import React from 'react';
import logo from './images/cinema-logo.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 

const LatestFilmCarousel  = () => {
    return (
        <div>
            <h3>Latest Films</h3>
            <Carousel showThumbs={false} width={'50%'}>
            <div style={{ height: '10px' }}>
                <img src={logo} alt="Latest Film Images"/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={logo} alt="Latest Film Images"/>
                <p className="legend">Legend 1</p>
            </div>
            </Carousel>
        </div>
)};

export default LatestFilmCarousel;