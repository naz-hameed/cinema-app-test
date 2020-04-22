import React from 'react';
import logo from './images/cinema-logo.png';
import './css/CinemaImages.css'


const CinemaImages  = () => {
    return (
        <div>
                <div className="imagerow">
                        <div className="imagecolumn">
                                <a href="/"><img src={logo} alt="Cinema Image 1" width="100%"/></a>
                        </div>
                        <div className="imagecolumn">
                                <img src={logo} alt="Cinema Image 2" width="100%"/>
                        </div>
                        <div className="imagecolumn">
                                <img src={logo} alt="Cinema Image 3" width="100%"/>
                        </div>
                </div>
        </div>
            
)};

export default CinemaImages;


