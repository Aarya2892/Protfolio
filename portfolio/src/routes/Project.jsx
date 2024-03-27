import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/Heroimage2';
import Work from '../components/Work';

function Project() {
  return (
    <div>
     <Navbar/>
     <Heroimage2 heading="PROJECTS." text="Some of my recent works"/>
     <Work/>
     <Footer/>
    </div>
  );
}

export default Project;
