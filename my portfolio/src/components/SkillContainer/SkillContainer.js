import React from 'react';
import { Element } from 'react-scroll';
import SkillImg from "../../assests/skills.jpg"
import "./SkillContainer.css"
import  LinearProgress  from '@material-ui/core/LinearProgress';

const SkillContainer = () => {
  return (
    
        <Element className='skillContainer' id='skills'>
            <div className='skillContainer__image'>
                <img src={SkillImg} alt=""/> 
            </div>
            <div className='skillContainer__text'>
                <h2>SKILLSET</h2>
                <div className='skillContainer__skillSet'>
                    <h5>Java</h5>
                    <div className='skillContainer__skillSet skillContainer__slider1'>
                        <LinearProgress variant='determinate' value={90}/>
                        </div>  
                </div>
                <div className='skillContainer__skillSet'>
                    <h5>C</h5>
                    <div className='skillContainer__skillSet skillContainer__slider2'>
                        <LinearProgress variant='determinate' value={80}/>
                        </div>  
                </div>
                <div className='skillContainer__skillSet'>
                    <h5>SQL</h5>
                    <div className='skillContainer__skillSet skillContainer__slider3'>
                        <LinearProgress variant='determinate' value={75}/>
                        </div>  
                </div>
                <div className='skillContainer__skillSet'>
                    <h5>Node</h5>
                    <div className='skillContainer__skillSet skillContainer__slider4'>
                        <LinearProgress variant='determinate' value={65}/>
                        </div>  
                </div>
                <div className='skillContainer__skillSet'>
                    <h5>React</h5>
                    <div className='skillContainer__skillSet skillContainer__slider5'>
                        <LinearProgress variant='determinate' value={60}/>
                        </div>  
                </div>
                <div className='skillContainer__skillSet'>
                    <h5>React Native</h5>
                    <div className='skillContainer__skillSet skillContainer__slider6'>
                        <LinearProgress variant='determinate' value={60}/>
                        </div>  
                </div>
                
            </div>
        </Element>
    
    

    
  )
}

export default SkillContainer
