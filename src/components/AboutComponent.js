import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div id="about">
                <h1> About Me! </h1>
                <div className="row">
                    <div className="aimage1 col-5 col-md-3">
                        <img className="aboutImage" src="/assets/a01.jpg" alt='Image 1' />
                    </div>
                    <div className="atext1 col-6 col-md-9">
                        I am currently a student at <a className="anchor" href="https://www.iitk.ac.in/" target="_blank"> Indian Institute of Technology, Kanpur </a> doing my masters in Computer Science. 
                        I have been a student in Computer Science for over 9 years now and from my first java-based management system to my latest Machine Learning projects I have ventured various sub-domains of this field.
                        Lately I find myself using Computer Science not just for my exams and assignments but for very basic and general problems like formatting a huge piece of text using a simple python scipt or 
                        building a simple android apk that would directly send any clicked picture to my laptop just to save myself from having to use data cable for the same purpose. That's what happen when you stick to a 
                        subject for so long. Right now I am enjoying web application development. 

                    </div>
                </div>
                <div className="row">
                    <div className="atext2 col-6 col-md-9">
                         Having brought up in a beautiful city like Hairdwar, I often find myself spending my time alone listening to music while sitting on some Ghat. It is true that you will
                         mostly find me alone with my headphones on, leading upto which I am often categorized as an introvert but I guess its just depends on one's perspective. 
                         I have some amazing friends with whom I love to travel. I am not a bundle of energy but still it is always laughter and gags when you are around me. I am experimental, 
                        welcoming and surprisingly friendly for humans and tech alike. 
                    </div>
                    <div className="aimage2 col-5 col-md-3">
                        <img className="aboutImage" src="/assets/a02.jpg" alt='Image 1' />
                    </div>
                </div>
            </div>
            );
    }
}

export default About;