import React from 'react'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignUpPage from './Components/SignUpPage';
import ScheduleForm from './Components/ScheduleForm';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './Components/css/App.css';

function App() {

  return (
    <div className="App">

      <Router>
        <div >
          <nav >
            <Header />
            <ul className='Links'>
              <li>

                <Link to='/home-page' class="button menubutton">Home</Link>
                &nbsp; &nbsp;
                            <Link to='/schedule-form' class="button menubutton">Schedule</Link>
                &nbsp; &nbsp;
                            <Link to='/signup-page' class="button menubutton">Sign-Up Page</Link>


              </li>
            </ul >
          </nav >

          <div className='PageContent'>
            <Route path='/schedule-form' exact component={ScheduleForm} />
            <Route path='/signup-page' exact component={SignUpPage} />
            <Route path='/' exact component={HomePage} />
            <Route path='/home-page' exact component={HomePage} />
          </div>

        </div >
      </Router >
      <Footer />
    </div>


  );
}
export default App;
