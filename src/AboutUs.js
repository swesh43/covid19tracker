import React from "react";
import Person from "./components/Person";

function AboutUs() {
  return (
    
    <div className="about">
      <h1 className="title">Our Team</h1>
      <div className="aboutus">
        

        <div className="block">
          <Person
            name="Om nath kushwaha"
            img="om.jpeg"
            text="om nath kushwaha is a final year undergraduate student of Computer Engineering at Delhi Technological 
                University."
          />
        </div>

        <div className="block">
          <Person
            name="Chitranjan kumar Gupta"
            img="chitranjan.jpeg"
            text="Chitranjan kumar Gupta is a final year undergraduate student of Computer Engineering at Delhi Technological 
            University."
      />
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
