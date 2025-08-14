import React from 'react'
import Navber from './../components/Home/Navber';
import AboutBanner from './../components/About/AboutBanner';
import AboutGoul from './../components/About/AboutGoul';
import AboutProsses from './../components/About/AboutProsses';

const About = () => {
  return (
    <div>
        <AboutBanner/>
        <AboutGoul/>
        <AboutProsses/>
    </div>
  )
}

export default About