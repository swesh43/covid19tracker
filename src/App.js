import React, { useState } from "react";
import hero from "./images/hero_image3.svg";
import StateWiseData from "./components/StateWiseData"


const App=(props)=> {
  
 

  return (
    <div className="App">
      <div className="hero">
        <div>
          <img src={hero} alt="hero" />
        </div>
        <div className="hero-content">
          <p className="hero-text">Covid Tracker</p>
          <p className="hero-body">
            Our Website gives us real-time statistics and analysis of covid-19
            StateWise Data in india.
          </p>
     
        </div>
      </div>
      
     <StateWiseData/>
    </div>
  );
}

export default App;
