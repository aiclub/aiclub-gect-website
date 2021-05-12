import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import ProfileCard from "./ProfileCard";
import MemberAvatar from "./MemberAvatar";
import members from "../../../resources/members";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import MemberBackground from "../MemberBackground/MemberBackground";

// Overriding @material ui styles
const useStyles = makeStyles((theme) => ({
  membersContainer: {
    width: "100vw",
    height: "100vh",
    position: "relative",
  },
  sliderContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    zIndex: 30,
    height: "90vh",
    margin: "10% 0",
    top: 0,
    left: 0,
  },
  profileCardContainer: {
    position: "absolute",
    bottom: 70,
    right: -80,
    zIndex: 50,
    transform: "translateX(-50%)",
  },
  memberQuote: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 60,
    padding: 10,
    transform: "translate(-35%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    boxShadow: "0px 10px -14px 14px rgba(255, 255, 255, 0.5)",
  },
  backToTopButtonContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    zIndex: 50,

    [theme.breakpoints.down("sm")]: {
      margin: 15,
    },
  },
}));

const MembersPage = () => {
  const classes = useStyles();
  const [select, setSelect] = useState({ show: true, memberIndex: 1 });

  return (
    <div className={classes.membersContainer}>
      <MemberBackground memberIndex={select.memberIndex} />
      <div className={classes.sliderContainer}>
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
      </div>
      <div className={classes.memberQuote}>
        <Typography variant={"body1"} style={{ textAlign: "center" }}>
          {members[select.memberIndex].description}
        </Typography>
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
