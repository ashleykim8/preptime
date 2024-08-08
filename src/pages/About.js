import React from 'react';
import './About.css';
import otisImage from './Otis.jpeg'; // Adjust the path as needed
import person2Image from './Ashley.jpeg'; // Adjust the path as needed

function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="team-member">
        <img src={otisImage} alt="Otis" className="team-photo" />
        <div className="team-info">
          <h3>Otis</h3>
          <p>
            Otis is from Seattle, WA. Otis is a Computer Science-Mathematics joint major, even though he shit on them
            before.
          </p>
        </div>
      </div>
      <div className="team-member">
        <img src={person2Image} alt="Ashley" className="team-photo" />
        <div className="team-info">
          <h3>Ashley</h3>
          <p>
            Ashley is an amazing person. She is from Princeton, NJ. She is also a Computer Science-Mathematics joint major.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
