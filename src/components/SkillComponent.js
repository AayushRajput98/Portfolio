import React, { Component, useState } from 'react';
import ReactDOM from "react-dom";
import { Jumbotron, Card, CardTitle, CardBody, CardDeck, CardImg, CardColumns, Fade } from 'reactstrap';
import ProgressBar from './ProgressBarComponent';
import { SKILLS } from '../shared/Skill.js'
import { TOOLS } from '../shared/Tools';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function RenderJumbotron({ skill }) {
    const details = skill.details;
    const jumbotronColor = skill.jumbotronColor;
    const progressBar = details.map((detail) => {
        return (
            <div className="row">
                <div className="col-12 col-md-2" style={{ marginTop: 10, textAlign: 'center' }}>
                    {detail.name}
                </div>
                <div className='col-12 col-md-10'>
                    <ProgressBar completed={detail.completed} />
                </div>
            </div>
        );
    });
    return (
        <> 
            <Fade in>
                <Jumbotron
                    className="jumbotron"
                    style={{ backgroundColor: jumbotronColor }}>
                    <h1> <i class={skill.icon} />   {skill.name} </h1>
                    <p> {skill.description} </p>
                    {progressBar}
                </Jumbotron>
            </Fade>
        </>
    );
}

function Skill(props) {
    const [showJumbotron, setShowJumbotron] = useState(false);
    const [id, setId] = useState(-1);
    const [skills] = useState(SKILLS);
    const [tools] = useState(TOOLS);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    console.log(windowDimensions.height, windowDimensions.width);
    const cards = skills.map((skill) => {
        return (
            <Card
                outline
                color={skill.color}
                onMouseOver={() => {
                    setShowJumbotron(true)
                    setId(skill.id)
                }}
                onMouseOut={() => { setShowJumbotron(false) }}>
                <CardBody>
                    <CardTitle>  {windowDimensions.height > 720 && <i class={skill.icon} />} {skill.name} </CardTitle>
                </CardBody>
            </Card>
        );
    });
    const cardColoumn = tools.map((tool) => {
        return (
            <Card>
                <CardImg src={tool.image} />
            </Card>
            );
    })
        return (
            <div id="skill">
                <h1> Skills & Tools </h1>
                <div className="row" style={{ marginRight: 75, marginLeft: 75, justifyContent: 'center' }}>
                    <div className="banner col-11 col-md-7" style={{ margin: 'auto' }}>
                        <CardDeck className="text-center">
                            {cards}
                        </CardDeck>
                    </div>
                    <div className='col-10 col-md-4 text'>
                        <h3> Skills </h3>
                        <p> As a student pursuing Computer Science over the course of time through academics we develop fundamental skills required in this field.
                            With these fundamental skills we increase our arsenal by venturing into various sub-domains and fields of Computer Science. These skills can be as simple as using
                            paint and MS Office to complicated architectural stuff using IOT. In my portfolio I have mentioned skills which I hope to take a notch higher by industrial experince </p>
                    </div>
                </div>
                {showJumbotron &&
                    <RenderJumbotron skill={skills[id]}
                        onMouseOver={() => { setShowJumbotron(true) }} />
                }
                <div className="row" style={{ marginRight: 100, marginLeft: 100, justifyContent: 'center' }}>
                    <div className='col-10 col-md-4 text'>
                        <h3> Tools </h3>
                        <p>  </p>
                    </div>
                    <div className="banner col-11 col-md-7">
                        <CardColumns>
                            {cardColoumn}
                        </CardColumns>                       
                   </div>
                </div>
            </div>
        );
    }

export default Skill;