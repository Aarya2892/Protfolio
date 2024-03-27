import './WorkCardstyle.css';
import React from 'react';
import WorkcardData from './WorkcardData'
import WorkCard from './WorkCard';

function Work() {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className="project-container">
        {WorkcardData.map((val, ind)=>{
          return(
            <WorkCard 
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}/>
          )
        })}
      </div>
    </div>
  );
}

export default Work;
