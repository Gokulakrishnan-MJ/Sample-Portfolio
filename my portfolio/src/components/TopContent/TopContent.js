import React from 'react';
import { Link } from 'react-scroll';
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>
                Mr. GOKULAKRISHNAN MURUGAN 
            </h1>
            <p>
                looking for a Challenging Role in a reputable organization to utilize </p><p>
                my technical skills for the growth of the organization as well as to as well </p><p>
                as  to enhance my knowledge about new and emerging trends in the IT sector 
            </p>
            <a href="https://www.google.com" target="blank">
                <button className='topContent__downloadBUtton'>  
                    Download CV
                </button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button  className='topContent__workButton'>My Works</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
