import React from 'react';
import './App.css';

function App() {
  let currentYear = new Date();
  var isLoggedIn = true;
  return (
    <div> 
      <h1> ENSF-381: Full Stack Web Development </h1>
      <p> React Components.</p>
      <p> {currentYear.getFullYear()} </p>
      {
        isLoggedIn === true ? <p> Welcome back! </p> : <p> Please Log in. </p>
      }  
    </div>   
  );
}

export default App;
