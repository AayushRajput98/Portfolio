import React, { Component } from 'react';
import { Jumbotron, Container, Card, CardTitle, CardBody, CardDeck, Button } from 'reactstrap';

class Education extends Component {
    render() {
        return (
            <div id="education">
                <h1> Education </h1>
                <div className="row banner">
                    <div className="col-12 col-md-3" id="block">
                        <div className="info">
                            <img src="/assets/l01.jpg" />
                            <h5> Swami Hariharanand Public School </h5>
                            <p>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.                                
                            </p>
                            <Button> Conitnue Reading </Button>
                        </div>
                    </div>
                    <div className="col-12 col-md-3" id="block">
                        <div className="info">
                            <img src="/assets/l02.jpg" />
                            <h5> College of Engineering, Roorkee </h5>
                            <p>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <Button> Conitnue Reading </Button>
                        </div>
                    </div>
                    <div className="col-12 col-md-3" id="block">
                        <div className="info">
                            <img src="/assets/l03.jpg" />
                            <h5> Indain Institute of Technology, Kanpur </h5>
                            <p>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <Button> Conitnue Reading </Button>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Education;