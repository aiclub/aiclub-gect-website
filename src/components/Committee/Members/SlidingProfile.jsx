import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Marquee from "react-fast-marquee";
import Profile from "./ProfileCard";
import members from "../../../resources/members";

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
        left: "0px",
        display: "flex",
        textAlign: "center",
    },
    marginProvider:{
        marginLeft: "0.5em",
        marginRight: "0.5em",
    }
}));



const Slider = ({isShown, setIsShown}) => {
    const classes = useStyles();
    const [mouseCord, setMouseCord] = useState({ x: null, y: null });
    const updateMousePosition = ev => {
        setMouseCord({ x: ev.clientX, y: ev.clientY });
      };
    return (
        <div >
            <div className={classes.profileCardDiv} onMouseMove={updateMousePosition}>
            {isShown.show && (
                <Profile memberIndex={isShown.memberIndex} mousePosition={mouseCord.x}></Profile>
            )}
            </div >
            <Marquee speed="70" pauseOnHover="true">
                {members.map((member)=>
                    <div key={member} className={classes.marginProvider}>
                        <Avatar onMouseOver={() => setIsShown(true, 1)} onMouseOut={() => setIsShown(false)} alt="Remy Sharp" src={member.picture.cartoon} className={classes.large} />
                    </div>
                )}
            </Marquee>
        </div>
        
    );
};
  
export default Slider;
