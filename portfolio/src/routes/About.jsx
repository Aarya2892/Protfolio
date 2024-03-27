import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/Heroimage2';
import WorkCard from '../components/WorkCard';
import AboutContent from '../components/AboutContent';

function About() {
  return (
    <div>
     <Navbar/>
     <Heroimage2 heading="ABOUT" text="Im a Friendly front-end Developer."/>
     <AboutContent/>
     <Footer/>
    </div>
  );
}

export default About;