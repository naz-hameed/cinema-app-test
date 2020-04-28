import React from "react";
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import logo from "./images/BlackWidow.png";
import logo1 from "./images/InvisibleMan.png";
import logo2 from "./images/Mulan.png";
import logo3 from "./images/WonderWoman.png";

const LatestFilmCoverFlow= () => {
  return (
    <div>
      <div id="latestfilms-title">
        {" "}
        <h3>Latest Films</h3>{" "}
      </div>

    <Coverflow width="50%" height="300"
        displayQuantityOfSide={1}
        navigation={false}
        enableScroll={true}
        currentFigureScale={1.0}
        otherFigureScale={0.7}
        >
        <img src={logo} height="60%" alt='Black Widow'/>
        <img src={logo1} alt='Invisible Man'/>
        <img src={logo2} alt='Mulan'/>
        <img src={logo3} alt='Wonder Woman' />
    </Coverflow>
      
    </div>
  );
};

export default LatestFilmCoverFlow;


//<img src={logo3} alt='Wonder Woman' data-action="http://andyyou.github.io/react-coverflow/"/>