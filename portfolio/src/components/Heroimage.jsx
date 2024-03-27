import './Heroimagestyle.css'
import React from 'react';
import {Link} from 'react-router-dom'

function Heroimage() {
  return (
    <div className='hero'>
      <div className="mask">
        {/* <img className='into-img' src='https://rog.asus.com/media/1668641182136.jpg'></img> */}
        <img className='into-img' src='https://www.reliancedigital.in/wp-content/uploads/2019/04/cover_image_screen_resolutions.jpg'/>
      </div>
      <div className="content">
        <p >HI, I'M AARYA</p>
        <h1>Web Developer.</h1>
        <div>
            <Link to="/Project" className='btn'> Projects</Link>

            <Link to="/Contact" className='btn-light'> Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Heroimage;
