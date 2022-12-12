import React from 'react';
import { Element } from 'react-scroll';
import "./Experience.css";
import ExperienceBox from '../ExperienceBox/ExperienceBox';

const Experience = () => {
  return (
  <Element className='experienceContainer' id='experience'>
    <div>
      
      <h1>Experience</h1>  
        <div className='exp'>
        <ExperienceBox number="Fresher"  style={{backgroundColor:"#f64c08"}}/>
        <ExperienceBox number="5+" title ='Projects'/>
        <ExperienceBox number="3" title ='Interships'/>
        <ExperienceBox number="20+" title ='Certifications'/>
        </div>
        </div>
    
  </Element>
  )
}

export default Experience
