import React from 'react';
import { Link } from 'react-router-dom';

// material ui 
import { makeStyles } from '@material-ui/core/styles';
import {Button, Container } from '@material-ui/core';
import Particles from 'react-particles-js';

const useStyles = makeStyles((theme) => ({
    root: { 
        height: '100vh', 
        background: theme.palette.primary.main, 
        color: 'white',
        display: 'flex',
        alignItems: 'center', 
        fontFamily: 'Roboto, sans-serif'
    },
    h1: {
        margin: 0, 
        fontSize: 40
    },
    h3: {
        fontSize: 29
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    buttonsContainer: {
        display: 'flex'
    },
    buttons: {
        textDecoration: 'none',
    }, 
    buttonsInside: {
        background: '#64d8cb', 
        marginRight: 10, 
    },
    topBackground: {
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}));

const Landing = () => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Particles params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 4
                        }
                    }
                }
            }} height='99vh' width='100vw'/>
            <div className={classes.topBackground}>
                <Container className={classes.container}>
                        <h1 className={classes.h1}>Camila Parada Valderrama</h1>
                        <h3 className={classes.h3}>Frontend Developer</h3>
                        <div className={classes.buttonsContainer}>
                            <Link to="/projects" className={classes.buttons}><Button variant="contained" className={classes.buttonsInside}>Projects</Button></Link>
                            <a href="https://drive.google.com/file/d/1p2jlFyl-3Rl3TU1sCgumTQ918e-fiqy0/view?usp=sharing" className={classes.buttons} rel="noopener noreferrer nofollow" 
                            target="_blank"><Button variant="contained" className={classes.buttonsInside}>CV</Button></a>
                        </div>
                </Container>
            </div>
        </div>
    );
}

export default Landing;