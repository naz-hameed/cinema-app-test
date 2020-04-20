import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ScheduleForm from './Components/ScheduleForm';


function App() {
  return (
    <div className="App">
      <Header /> 
        <ScheduleForm />
      <Footer />
    </div>
  );
}

export default App;
