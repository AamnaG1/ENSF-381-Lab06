import React from 'react';
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
        isLoggedIn === true ? <p> Welcome back! </p> : <p> Please Log in. </p>
      }
      <hr/>
        <p> 
          <Home title="Home Page" description="Welcome to our website."/>
          <About title="About Us" description="We are passionate about delivering quality experiences."/>
          <Contact title="Contact Us" description="Feel free to reach out to us via email or phone."/>
        </p>  
    </div>    
  );
}

export default App;
