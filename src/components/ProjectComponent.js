import React, { useState, useRef, useEffect } from 'react';
import { Button, Card, CardImg } from 'reactstrap';
import { Projects } from '../shared/Projects';

function Project(props) {
    const [projects] = useState(Projects);
    const [slides] = useState(projects[0].images);
    console.log(slides);
    const firstSlide = slides[0]
    const secondSlide = slides[1]
    const lastSlide = slides[slides.length - 1]

    //State Variables
    const [state, setState] = useState({
        activeSlide: 0,
        _slides: [lastSlide, firstSlide, secondSlide],
        transition: 0.45,
        translate: -100,
    })

    const { activeSlide, _slides, translate, transition } = state

    //useRef is used to create a mutable reference for a variable which remains alive for the course of app lifetime.
    const transitionRef = useRef()
    const autoPlay = useRef()

    //Effect Hooks work like componentDidMount that can be used to execute code after mouting of the DOM Elements is completed.
    //Setting the reference of transition and autoplay
    useEffect(() => {
        transitionRef.current = smoothTransition
        autoPlay.current = goRight
    })

    //Everytime activeSlide state variable is changed useEffect is called which in turns calls smooth and play function for transition and autoplay rspectively.
    useEffect(() => {
        const play = () => {
            autoPlay.current()
        }
        const smooth = e => {
            if (e.target.className.includes('slide')) {
                transitionRef.current()
            }
        }
        const transitionEnd = window.addEventListener('transitionend', smooth)
        let interval = null
        interval = setInterval(play, 2500)
        return () => {
            window.removeEventListener('transitionend', transitionEnd)
            clearInterval(interval)

        }

    }, [])

    //To reset the transition period after the _slides array is updated.
    useEffect(() => {
        if (transition === 0)
            setState({
                ...state,
                transition: 0.45
            })
    }, [transition])

    //Updates the _slides array to contain a set of three arrays: prev, current, next.
    const smoothTransition = () => {
        let _slides = []
        if (activeSlide === slides.length - 1)
            _slides = [slides[slides.length - 2], lastSlide, firstSlide]
        else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
        else _slides = slides.slice(activeSlide - 1, activeSlide + 2)
        setState({
            ...state,
            _slides: _slides,
            translate: -100,
            transition: 0
        })
    }
    console.log(state)

    //goTo prev Slide action
    const goLeft = () => {
        setState({
            ...state,
            translate: 0,
            activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
        })
    }

    //goto next slide action
    const goRight = () => {
        setState({
            ...state,
            translate: -200,
            activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
        })
    }
        return (
            <div id="project">
                <h1> Projects </h1>
                <div className="Project1 row" style={{ margin: 10, minHeight: '50vh'}}>
                    <div className="col-12 col-md-7 projectIntro">
                        <p> {projects[0].description} </p>
                    </div>
                    <div className="col-12 col-md-4 slider">
                        <div className="slideParent" style={styleCardParent}>
                            {
                                _slides.map((slide) => {
                                    return (
                                        <div className="row" style={styleCard} >
                                            <div key={slide.id} className="slide" style={{ transform: `translateX(${translate}%)`, transition: '0.5s' }}>
                                                <Card>
                                                    <CardImg src={slide.img} />
                                                </Card>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            <div className="Dots" style={styleDots}>
                                {
                                    slides.map((slide, i) => {
                                        return (
                                            <span className="Dot" style={{ background: `${(activeSlide === i) ? 'grey' : 'black'}`, padding: 5, borderRadius: '100%', marginRight: 5 }}>  </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

//Styles
const styleCardParent = {
    position: 'relative',
    margin: '10',
    alignItems: 'center',
    width: '40%',
    height: '90%',
    overflow: 'hidden',
    display: 'flex',
}

const styleCard = {
    margin: 0,
    minWidth: '100%',
    maxHeight: '100%',
}

const styleDots = {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
}

export default Project;