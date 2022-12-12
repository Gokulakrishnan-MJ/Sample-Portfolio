import React from 'react'
import { Element } from 'react-scroll';
import Projects from '../Projects/Projects';
import "./ProjectContainer.css";

const ProjectContainer = () => {
  
  const projects=[ 
    {
      img:"https://img.freepik.com/free-vector/indian-flag-theme-independence-day-decorative-background-vector_1055-10866.jpg?auto=format&h=200",
      title:"Project_1",
      desc:" This is description about the project 1",
      link:"www.google.com",
    },{
      img:"https://img.freepik.com/free-vector/indian-flag-theme-independence-day-decorative-background-vector_1055-10866.jpg?auto=format&h=200",
      title:"Project_1",
      desc:" This is description about the project 1",
      link:"www.google.com",
    },{
      img:"https://img.freepik.com/free-vector/indian-flag-theme-independence-day-decorative-background-vector_1055-10866.jpg?auto=format&h=200",
      title:"Project_1",
      desc:" This is description about the project 1",
      link:"www.google.com",
    },{
      img:"https://img.freepik.com/free-vector/indian-flag-theme-independence-day-decorative-background-vector_1055-10866.jpg?auto=format&h=200",
      title:"Project_1",
      desc:" This is description about the project 1",
      link:"www.google.com",
    },{
      img:"https://img.freepik.com/free-vector/indian-flag-theme-independence-day-decorative-background-vector_1055-10866.jpg?auto=format&h=200",
      title:"Project_1",
      desc:" This is description about the project 1",
      link:"www.google.com",
    },
    {
      img:"https://img.freepik.com/free-vector/indian-flag-theme-independence-day-decorative-background-vector_1055-10866.jpg?auto=format&h=200",
      title:"Project_1",
      desc:" This is description about the project 1",
      link:"www.google.com",
    }
  ];
  return (
    <Element className='projectContainer' id="projects">
      <h1>Projects</h1>
      <p>Here Some Of the projects to take a look</p>
      <div className='projectsContainer__projects'>
        {
          projects.map((project,index)=>{
            return(
              <Projects key={index}  
              img={project.img} 
              title={project.title}
               desc={project.desc} 
               link={project.link}/>
            )
          })
        }

      </div> 
    </Element>
  )
}

export default ProjectContainer
