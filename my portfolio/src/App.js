import React from 'react';
import Header from "./components/Header/Header";
import SkillContainer from './components/SkillContainer/SkillContainer';
import TopContainer from './components/TopContainer/TopContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import "./App.css"
import Experience from './components/ExperienceContainer/Experience';
import Contact from './components/Contact/Contact';

const App = () => {
    return (
        <div>
            <Header/>
            <TopContainer/>
            <SkillContainer/>
            <ProjectContainer/>
            <Experience/>
            <Contact/>
        </div>
    )
}
export default App