import React from 'react';
import logo from './images/BlackWidow.png';
import logo1 from './images/InvisibleMan.png';
import logo2 from './images/Mulan.png';
import logo3 from './images/WonderWoman.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 

const LatestFilmCarousel  = () => {
    return (
        <div>
           <div id ="latestfilms-title"> <h3>Latest Films</h3> </div>
            <Carousel showThumbs={false} width={'50%'}>
            <div style={{ height: '10px' }}>
                <div>
                <img src={logo} alt="Latest Film Images"/>
                <p className="legend">Black Widow</p>
            </div>
            <div>
                <img src={logo1} alt="Latest Film Images"/>
                <p className="legend">The Invisible Man</p>
            </div>
            <div>
                <img src={logo2} alt="Latest Film Images"/>
                <p className="legend">Mulan</p>
            </div>
            <div>
                <img src={logo3} alt="Latest Film Images"/>
                <p className="legend">WonderWoman</p>
            </div>
            </div>

            </Carousel>
            
        </div>
       
)};

export default LatestFilmCarousel;