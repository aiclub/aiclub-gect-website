import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Profile from "./ProfileCard";
import members from "../../../resources/members";
import MemberAvatar from "./MemberAvatar";

const useStyles = makeStyles((theme) => ({
  avatarSlider: {
    display: "flex",
  },
  gap: {
    minWidth: "2.5em",
  },
  profileCardDiv: {
    marginBottom: "0.95em",
    position: "relative",
    left: "0px",
    display: "flex",
    textAlign: "center",
  },
}));

const Slider = ({ isShown, setIsShown }) => {
  const classes = useStyles();
  const [mouseCord, setMouseCord] = useState({ x: null, y: null });
  const updateMousePosition = (ev) => {
    setMouseCord({ x: ev.clientX, y: ev.clientY });
  };
  return (
    <div>
      <div className={classes.profileCardDiv} onMouseMove={updateMousePosition}>
        {isShown.show && (
          <Profile
            memberIndex={isShown.memberIndex}
            mousePosition={mouseCord.x}
          ></Profile>
        )}
      </div>
      <Marquee speed="70" pauseOnHover="true">
        {members.map((member, index) => (
          <div key={member} className={classes.marginProvider}>
            <MemberAvatar setSelect={setIsShown} index={index} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
