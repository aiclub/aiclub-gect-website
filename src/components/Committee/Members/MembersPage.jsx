import { useState } from "react";
import Marquee from "react-fast-marquee";
import { makeStyles } from "@material-ui/core/styles";

import ProfileCard from "./ProfileCard";
import MemberAvatar from "./MemberAvatar";
import members from "../../../resources/members";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import MemberBackground from "../MemberBackground/MemberBackground";

// Overriding @material ui styles
const useStyles = makeStyles({
  membersContainer: {
    width: "100vw",
    height: "100vh",
    position: "relative",
  },
  sliderContainer: {
    position: "absolute",
    zIndex: 30,
    width: "100vh",
    marginBottom: 20,
    top: 0,
    right: 0,
    transform: "rotate(-90deg) translateX(-50%)",
  },

  profileCardContainer: {
    position: "absolute",
    bottom: "10%",
    right: -50,
    zIndex: 50,
    transform: "translateX(-50%)",
  },
  backToTopButtonContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 30,
    zIndex: 50,
  },
});

const MembersPage = () => {
  const classes = useStyles();
  const [select, setSelect] = useState({ show: true, memberIndex: 1 });

  return (
    <div className={classes.membersContainer}>
      <MemberBackground memberIndex={select.memberIndex} />
      <div className={classes.sliderContainer}>
        <Marquee speed="2" pauseOnHover="true" direction={"right"}>
          {members.map((member, index) => (
            <div key={member}>
              <MemberAvatar
                index={index}
                setSelect={(show, memberIndex = select.memberIndex) =>
                  setSelect({ show: show, memberIndex: memberIndex })
                }
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className={classes.profileCardContainer}>
        <ProfileCard memberIndex={select.memberIndex} />
      </div>
      <div className={classes.backToTopButtonContainer}>
        <BackToTopButton />
      </div>
    </div>
  );
};

export default MembersPage;
