import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Education from './EducationComponent';
import Skill from './SkillComponent';

class MainComponent extends Component {
    render() {
        return (
            <>
                <Header />
                <Home />
                <About />
                <Education />
                <Skill />
            </>
            );
    }
}

export default MainComponent;
