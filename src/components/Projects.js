import React from 'react';
import ProjectCardRight from './ProjectCardRight';
import ProjectCardLeft from './ProjectCardLeft';
import ProjectsJSON from '../Projects.json';
import html from '../img/html5.png';
import css from '../img/css3.png';
import js from '../img/javascript.png';
import bootstrap from '../img/bootstrap.png';
import react from '../img/react.png';
import git from '../img/git.png';
import github from '../img/github.png';
import material from '../img/materialui.png';
import tailwind from '../img/tailwind.svg';
import sass from '../img/sass.png';
import poke1 from '../img/poke1.png';
import poke2 from '../img/poke2.png';
import poke3 from '../img/poke3.png';
import poke4 from '../img/poke4.png';
import chat1 from '../img/chat1.png';
import chat2 from '../img/chat2.png';
import chat3 from '../img/chat3.png';
import trivia1 from '../img/trivia1.png';
import trivia2 from '../img/trivia2.png';
import trivia3 from '../img/trivia3.png';
import styledComponents from '../img/styled-components.png';
import jest from '../img/jest.png';

// material ui 
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Container from '@material-ui/core/Container';
import CodeIcon from '@material-ui/icons/Code';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: { 
        height: '100vh',
        display: 'flex',
        fontFamily: 'Roboto, sans-serif'
    },
    gridItem1: {
        width: '60%', 
        background: theme.palette.secondary.dark, 
        overflow: 'auto',
    }, 
    gridItem2: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-around', 
        alignItems: 'center', 
        width: '40%', 
        background: theme.palette.primary.light, 
        color: 'white', 
        textAlign: 'center'
    }, 
    iconsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    icon: {
        fontSize: 40, 
        marginRight: 10, 
        color: 'black'
    }, 
    icons: {
        fontSize: 40, 
        marginRight: 10, 
        color: 'white'
    }, 
    techIcons: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom: 10
    }, 
    techContainer: {
        display: 'flex', 
        flexDirection: 'column', 
        background: 'white', 
        borderRadius: 10, 
        width: '90%', 
        padding: 20
    }, 
    techImg: {
        width: 50, 
        height: 50,
        marginBottom: 5
    }, 
    gridImg: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    bold: {
        fontWeight: 'bold', 
        color: theme.palette.secondary.contrastText, 
        fontSize: 20
    }, 
    h1: {
        color: theme.palette.primary.light
    }, 
    fontColor: {
        color: theme.palette.primary.main
    }, 
    lineSpace: {
        lineHeight: 1.5,
        fontSize: 17.5
    }
}));

const Projects = () => {
    const classes = useStyles();
    const pokemon = ProjectsJSON.items[0];
    const imgPoke = [{img: poke1, alt: 'poke-login'}, {img: poke2, alt: 'poke-home'}, {img: poke3, alt: 'pokemon-info'}, {img: poke4, alt: 'pokemon-location-info'}];
    const chat = ProjectsJSON.items[1];
    const imgChat = [{img: chat1, alt: 'chat-login'}, {img: chat2, alt: 'chat-signup'}, {img: chat3, alt: 'chat-home'}];
    const trivia = ProjectsJSON.items[2];
    const imgTrivia = [{img: trivia1, alt: 'chat-login'}, {img: trivia2, alt: 'chat-signup'}, {img: trivia3, alt: 'chat-home'}];

    return (
        <div className={classes.root}>
            <Container className={classes.gridItem1}>
                <h1 className={classes.h1}>here are some of my projects: </h1>
                <ProjectCardRight name={pokemon.name} description={pokemon.description} githubUrl={pokemon.githubUrl} liveDemo={pokemon.liveDemo} item={imgPoke}/>
                <ProjectCardLeft name={chat.name} description={chat.description} githubUrl={chat.githubUrl} liveDemo={chat.liveDemo} item={imgChat} login={chat.login}/>
                <ProjectCardRight name={trivia.name} description={trivia.description} githubUrl={trivia.githubUrl} liveDemo={trivia.liveDemo} item={imgTrivia}/>
            </Container>
                <Container className={classes.gridItem2}>
                    <div>
                        <h2>Hi there! 🇨🇴 My name is Camila,</h2>
                        <p className={classes.lineSpace}>I'm a former soccer player that now thrives on code and sci-fi shows! Currently using React and all its tools (Hooks, React Router, Redux) for web development. Bilingual, English/Spanish, and some Italian 😁. I enjoy going for walks while listening to music, picnics, and reading.</p>
                    </div>
                    <div className={classes.techContainer}>
                        <div className={classes.techIcons}>
                            <CodeIcon className={classes.icon}/>
                            <p className={classes.bold}>TECH STACK</p>
                        </div>
                        <Grid container className={classes.fontColor} spacing={2}>
                            <Grid item xs={4} className={classes.gridImg}>
                                <img src={html} alt="html" className={classes.techImg}/>
                                <span>HTML</span>
                            </Grid>
                            <Grid item xs={4} className={classes.gridImg}>
                                <img src={css} alt="css" className={classes.techImg}/>
                                <span>CSS</span>
                            </Grid>
                            <Grid item xs={4} className={classes.gridImg}>
                                <img src={bootstrap} alt="bootstrap" className={classes.techImg}/>
                                <span>Bootstrap</span>
                            </Grid>
                            <Grid item xs={4} className={classes.gridImg}>
                                <img src={tailwind} alt="tailwind" className={classes.techImg}/>
                                <span>Tailwind CSS</span>
                            </Grid>
                            <Grid item xs={4} className={classes.gridImg}>
                                <img src={sass} alt="sass" className={classes.techImg}/>
                                <span>Sass</span>
                            </Grid>
                            <Grid item xs={4} className={classes.gridImg}>
                                <img src={js} alt="javascript" className={classes.techImg}/>
                                <span>JavaScript</span>
                            </Grid>
                            <Grid item xs={4} className={classes.gridImg}>
                                <img src={react} alt="react" className={classes.techImg}/>
                                <span>React</span>
                            </Grid>
                            <Grid item xs={4} className={classes.gridImg}>
                                <img src={material} alt="material-ui" className={classes.techImg}/>
                                <span>Material UI</span>
                            </Grid>
                            <Grid item xs={4} className={classes.gridImg}>
                                <img src={styledComponents} alt="styled-components" className={classes.techImg}/>
                                <span>Styled Components</span>
                            </Grid>
                            <Grid item xs={4} className={classes.gridImg}>
                                <img src={jest} alt="jest" className={classes.techImg}/>
                                <span>Jest</span>
                            </Grid>
                            <Grid item xs={4} className={classes.gridImg}>
                                <img src={git} alt="git" className={classes.techImg}/>
                                <span>Git</span>
                            </Grid>
                            <Grid item xs={4} className={classes.gridImg}>
                                <img src={github} alt="github" className={classes.techImg}/>
                                <span>Github</span>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <p>Let's connect here:</p>
                        <div className={classes.iconsContainer}>
                            <Link href="https://github.com/candrepa1" target="_blank" rel="noreferrer"><GitHubIcon className={classes.icons}/></Link>
                            <Link href="https://www.linkedin.com/in/candrepa1/" target="_blank" rel="noreferrer"><LinkedInIcon className={classes.icons}/></Link>
                            <Link href="mailto:candrepa1@gmail.com"><EmailOutlinedIcon className={classes.icons}/></Link>
                        </div>
                    </div>
                </Container>
        </div>
    )
}

export default Projects;