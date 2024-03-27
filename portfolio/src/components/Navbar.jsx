import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbarstyle.css';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
 
  const[click, setclick] = useState(false);
  const handleclick=()=> setclick(!click);

  const [color, setcolor] = useState(false);
  const changecolor=()=>{
    if(window.scrollY >=100){
      setcolor(true);
    }else{
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changecolor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1 className='m-5 text-4xl underline text-purple-800 font-bold'>Portfolio</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li >
            <Link to="/Project">Project</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Conatct">Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleclick}>
        {click ? (<FaTimes size={20} style={{color: "#fff"}}/> ): ( <FaBars size={20} style={{color: "#fff"}}/>)}
      </div>
     
      
    </div>
  );
}

export default Navbar;

