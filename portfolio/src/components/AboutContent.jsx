import './Aboutcontentstyle.css';
import React from 'react';
import {Link} from "react-router-dom"

function AboutContent() {
  return (
    <div className='about'>
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am Front-end Developer. I Create responsive secure websites for my clients.</p>
        <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
            <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/140405850/original/c670430f7b3452d1889b3dbda4356ab3911becef/create-professional-react-website-design.png" className='img' alt='true'/>
            </div>

            <div className="img-stack bottom">
            <img src="https://www.hubsol.com/public/upload/post/98734_web-development-skills.jpg" className='img' alt='true'/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
