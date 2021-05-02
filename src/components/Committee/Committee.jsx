import { makeStyles } from "@material-ui/core/styles";

import Slider from "./Members/SlidingProfile";
import MemberCount from "./MemberCount/MemberCount";
import Background from "../../assets/images/committee/background.png";

const useStyles = makeStyles({
  committeeContainer: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    background: `url(${Background})`,
  },
  memberCountContainer: {
    position: "absolute",
    zIndex: 20,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  sliderContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 30,
    width: "100%",
    marginBottom: 20,
  },
});

const Committee = () => {
  const classes = useStyles();

  return (
    <div className={classes.committeeContainer}>
      <div className={classes.memberCountContainer}>
        <MemberCount />
      </div>
      <div className={classes.sliderContainer}>
        <Slider />
      </div>
    </div>
  );
};

export default Committee;
