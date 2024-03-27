import './Footerstyle.css'
import React from 'react';
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color: "#fff", marginRight:'2rem'}}/>
            <div>
                <p>At.Post.Nihe</p>
                <p>Palghar,Maharashtra</p>
            </div>
          </div>
          <div className="phone">
            <h4 className='flex'><FaPhone className='color-white' size={20} style={{color: "#fff", marginRight:'2rem'}}/>91-7972054778 </h4>
          </div>
          <div className="email">
            <h4 className='flex'>
                <FaMailBulk className='color-white' size={20} style={{color: "#fff", marginRight:'2rem'}}/>aaryapatil2892@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
            <h4> About Myself</h4>
            <p>My name is Aarya Dayanand Patil. I'm Web Developer, Loved to design the websites using the new techniques.</p>
        
        <div className="social">
        <FaFacebook className='color-white' size={20} style={{color: "#fff", marginRight:'2rem'}}/>
        <FaTwitter className='color-white' size={20} style={{color: "#fff", marginRight:'2rem'}}/>
        <FaInstagram className='color-white' size={20} style={{color: "#fff", marginRight:'2rem'}}/>
        <FaLinkedin className='color-white' size={20} style={{color: "#fff", marginRight:'2rem'}}/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
