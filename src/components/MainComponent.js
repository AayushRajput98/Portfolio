import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Education from './EducationComponent';
import Skill from './SkillComponent';
import Project from './ProjectComponent';

class MainComponent extends Component {
    render() {
        return (
            <>
                <Header />
                <Home />
                <About />
                <Education />
                <Skill />
                <Project />
            </>
            );
    }
}

export default MainComponent;
