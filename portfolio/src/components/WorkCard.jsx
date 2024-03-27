import './WorkCardstyle.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function WorkCard(props) {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt='image'></img>
            <h2 className='project-title'>{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btn">
                    <NavLink to={props.view} className="btn"> CODE</NavLink>
                </div>
            </div>
    </div>
  );
}

export default WorkCard;
