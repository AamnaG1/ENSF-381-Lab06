import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import EngineeringTopics from './EngineeringTopics';

function App() {
  let currentYear = new Date();
  var isLoggedIn = true;
  let l
  return (
    <div> 
      <h1> ENSF-381: Full Stack Web Development </h1>
      <p> React Components.</p>
      <p> {currentYear.getFullYear()} </p>
      {
        isLoggedIn == true ? <p> Welcome back! </p> : <p> Please Log in. </p>
      }  
    </div>   
  );
}

export default App;
