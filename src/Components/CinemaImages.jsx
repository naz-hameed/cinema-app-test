import React from 'react';
import driveInLeeds from './images/DriveinLeeds.jpg';
import driveInYork from './images/DriveinYork.jpg';
import driveInMan from './images/DriveinMan.png';
import './css/CinemaImages.css'


const CinemaImages  = () => {
    return (
        <div>
                <div className="imagerow">
                        <div className="imagecolumn">
                                <a href="https://goo.gl/maps/b5C67uVZa1rcSF6R9" target="_blank" rel="noopener noreferrer"><img src={driveInLeeds} alt="Drive in Leeds" width="100%"/></a>
                        </div>
                        <div className="imagecolumn">
                                <a href='https://goo.gl/maps/igoi1tMzUqBzCNag6' target="_blank" rel="noopener noreferrer" ><img src={driveInYork} alt="Drive in York" width="100%"/></a>
                        </div>
                        <div className="imagecolumn">
                                <a href='https://goo.gl/maps/fGYHbxWNstFujanR9' target="_blank" rel="noopener noreferrer" ><img src={driveInMan} alt="Drive In Manchester" width="100%"/></a>
                        </div>
                </div>
        </div>
            
)};

export default CinemaImages;


