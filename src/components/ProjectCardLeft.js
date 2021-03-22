import React from 'react';

// material ui 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    cards: {
        display: 'flex',
        flexWrap: 'wrap', 
        marginBottom: 20,
    }, 
    leftSideCard: {
        width: '70%'
    },
    rightSideCard: {
        width: '30%', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'start', 
        textAlign: 'center'
    },
    indivCard: {
        display: 'flex',
        width: '100%'
    }, 
    carousel: {
        textAlign: 'center', 
        height: '100%', 
        borderRadius: 10, 
        marginRight: 10
    }, 
    img: {
        width: '100%',
        heigh: '100%', 
        borderRadius: 10
    }, 
    button: {
        marginRight: 10, 
        background: theme.palette.primary.dark, 
        color: theme.palette.primary.contrastText, 
        marginTop: 10
    }, 
    title: {
        textDecoration: 'underline', 
        fontSize: 30, 
        marginBottom: 15
    }, 
    lineSpace: { 
        fontSize: 16, 
    }, 
    noMargin: {
        marginTop: 0,
    }
}));

const ProjectCardLeft = ({name, description, githubUrl,liveDemo, item, login}) => {
    const classes = useStyles();
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} className={classes.cards}>
                <div key={name} className={classes.indivCard}>
                    <div className={classes.rightSideCard}>
                        <h3 className={classes.title}>{name}</h3>
                        <p className={classes.lineSpace}>{description}</p>
                        {login && <p className={classes.noMargin}>Email: {login.email} <br/> Password: {login.password}</p>}
                        <div>
                            <Link href={githubUrl} target='_blank' rel='noreferrer'><Button variant="contained" className={classes.button}>Code</Button></Link>
                            <Link href={liveDemo} target='_blank' rel='noreferrer'><Button variant="contained" className={classes.button}>Live</Button></Link>
                        </div>
                    </div>
                    <div className={classes.leftSideCard}>
                        <Carousel className={classes.carousel}>{item.map((img) => <img className={classes.img} key={img.alt} src={img.img} alt={img.alt}/>)}</Carousel>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default ProjectCardLeft;