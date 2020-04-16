import React from 'react';
import logo from './images/cinema-logo.png';


const Header = () => {
    return (
        <>
        <header>
            <img src={logo} className="App-logo" alt="logo" /> 
            <nav className = "navbar navbar-expand-sm">

            <p>    </p>
            
            <button id = "home-btn">Home</button>
            <button id = "schedule-btn">Schedule</button>
            <button id = "signup-btn">SignUp</button>

           {/* <li> <a href = "#" title ="Home"> Home </a></li> */}
          {/* 
            <li> <a href = "#" title ="Schedule"> Schedule </a></li>
            <li> <a href = "#" title ="Sign Up"> Sign up </a></li> */}
            </nav>
        </header>



        </>
    );
};
export default Header;