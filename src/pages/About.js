import React from 'react';
import './About.css';
import otisImage from './Otis.jpg'; // Adjust the path as needed
import ashleyImage from './Ashley.jpg'; // Adjust the path as needed

function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="team">
        <div className="team-member">
          <img src={otisImage} alt="[Otis Photo]" className="team-photo" />
            <h3>Otis Golden</h3>
            <p>
              Otis Golden is a Junior at Harvey Mudd College, majoring in joint Computer Science-Mathematics. Otis is from Seattle, WA.
            </p>
        </div>
        <div className="team-member">
          <img src={ashleyImage} alt="[Ashley Photo]" className="team-photo" />
            <h3>Ashley Kim</h3>
            <p>
              Ashley Kim is a Junior at Harvey Mudd College, majoring in joint Computer Science-Mathematics. Ashley is from Princeton, NJ.
            </p>
        </div>
      </div>
    </div>
  );
}

export default About;
