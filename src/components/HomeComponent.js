import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <div className="home">
                    <div className="himage01">
                        <img className="homeImage" src="assets/h01.jpg" alt="Home 01" />
                    </div>
                    <div className="htext01">
                        <h6> Hi there, </h6>
                        <h1> I am Aayush Rajput </h1>
                        <h6> and you are visiting my protfolio page </h6>
                    </div>
                    <div className="credits"> Image: <a className="anchor" href="http://www.freepik.com" target="_blank">Designed by Freepik</a> </div>
                </div>
            </div>
            );
    }
}

export default Home;