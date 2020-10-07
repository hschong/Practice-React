import React from 'react';

const About = ({ year }) => {
  console.log('About: year = ', year);
  return (
    <div className='about__container'>
      <span>
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span>− George Orwell, {year}</span>
    </div>
  );
};

About.defaultProps = {
  year: 1988,
};

export default About;
