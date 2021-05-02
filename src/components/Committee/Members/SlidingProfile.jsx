import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Marquee from "react-fast-marquee";
import Profile from "./ProfileCard";
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    avatarSlider:{
        display:'flex',
    },
    gap:{
        minWidth: '2.5em'
    },
    profileCardDiv: {
        marginBottom: "0.95em",
        position: "relative",
        left: "215px",
        display: "flex",
        textAlign: "center",
    },
    antiCollapser: {
        minHeight: "229px"
    }
}));




const Slider = () => {
    const classes = useStyles();
    const [isShown, setIsShown] = useState(false);

    return (
        <div >
            <div className={classes.profileCardDiv}>
            {isShown && (
                <Profile></Profile>
            )}
            <div className={classes.antiCollapser}></div>
            </div >
            <Marquee speed="70" pauseOnHover="true">
                <Avatar onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} alt="Remy Sharp" src="./images.jpeg" className={classes.large} />
                <div className={classes.gap}></div>
                <Avatar onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} alt="Remy Sharp" src="./images.jpeg" className={classes.large} />
                <div className={classes.gap}></div>
                <Avatar onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} alt="Remy Sharp" src="./images.jpeg" className={classes.large} />
                <div className={classes.gap}></div>
                <Avatar onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} alt="Remy Sharp" src="./images.jpeg" className={classes.large} />
                <div className={classes.gap}></div>
                <Avatar onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} alt="Remy Sharp" src="./images.jpeg" className={classes.large} />
                <div className={classes.gap}></div>
                <Avatar onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} alt="Remy Sharp" src="./images.jpeg" className={classes.large} />
                <div className={classes.gap}></div>
                <Avatar onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} alt="Remy Sharp" src="./images.jpeg" className={classes.large} />
                <div className={classes.gap}></div>
                <Avatar onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} alt="Remy Sharp" src="./images.jpeg" className={classes.large} />
                <div className={classes.gap}></div>
                <Avatar onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} alt="Remy Sharp" src="./images.jpeg" className={classes.large} />
                <div className={classes.gap}></div>
                <Avatar onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} alt="Remy Sharp" src="./images.jpeg" className={classes.large} />
                <div className={classes.gap}></div>
                <Avatar onMouseOver={() => setIsShown(true)} onMouseOut={() => setIsShown(false)} alt="Remy Sharp" src="./images.jpeg" className={classes.large} />
                <div className={classes.gap}></div>
            </Marquee>
        </div>
        
    );
};
  
export default Slider;
