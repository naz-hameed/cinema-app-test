import React from 'react';
import logo from './images/cinema-logo.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ScheduleForm from '../Components/ScheduleForm';





const Header = () => {
    return (
        <>
            <header>
                <img src={logo} className="App-logo" alt="logo" />
                <nav className="navbar navbar-expand-sm">
                    <p></p>
                    <button id="home-btn">Home</button>

                    <button id="schedule-btn">Schedule</button>
                    <button id="signup-btn">SignUp</button>


                </nav>
                <Router>
                    <div >

                        <nav >
                            <ul>
                                <li>
                                    <Link to='/schedule-form'>Schedule</Link>
                                </li>
                            </ul >
                        </nav >
                        <Route path='/schedule-form' exact component={ScheduleForm} />


                    </div >
                </Router >
            </header>



        </>
    );
};
export default Header;




