// Component to show member image and member name in the background

import { makeStyles } from "@material-ui/core/styles";

import members from "../../../resources/members";
import NameBackground from "./NameBackground/NameBackground";

// overriding @material ui styles
const useStyles = makeStyles(theme => ({
  memberContainer: {
    height: "100vh",
    background: "#000000",
  },
  image: {
    position: "absolute",
    top: "5%",
    zIndex: 10,
    left: "50%",
    height: "80%",
    opacity: "65%",
    transform: "translateX(-50%)",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
    }
  },
}));

const MemberBackground = ({ memberIndex }) => {
  const classes = useStyles();
  console.log(memberIndex)

  return (
    <div className={classes.memberContainer}>
      <img
        className={classes.image}
        alt={members[memberIndex].name}
        src={members[memberIndex].picture.white}
      />
      <NameBackground name={members[memberIndex].name} />
    </div>
  );
};

export default MemberBackground;
