import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { EDUCATION } from '../shared/Education.js';

function Education(props) {
    const [education] = useState(EDUCATION);
    const blocks = education.map((degree) => {
        return (
            <div className="col-6 col-md-3" id="block">
                <div className="info">
                    <img src={degree.logo} />
                    <h5> {degree.name} </h5>
                    <p> {degree.intro} </p>
                    <Button> Conitnue Reading </Button>
                </div>
            </div>
            );
    })
        return (
            <div id="education">
                <h1> Education </h1>
                <div className="row banner">
                    {blocks}
                </div>
            </div>
            );
    }

export default Education;