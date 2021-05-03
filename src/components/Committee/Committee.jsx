import axios from "axios";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Slider from "./Members/SlidingProfile";
import MemberCount from "./MemberCount/MemberCount";
import MemberBackground from "./MemberBackground/MemberBackground";
import Background from "../../assets/images/committee/background.png";

// Overriding @material ui themes.
const useStyles = makeStyles({
  committeeContainer: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    background: (hover) => (hover ? "#F6F6F6" : `url(${Background})`),
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
  // Get the current member being hovered.
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState({ show: false, memberIndex: -1 });

  const classes = useStyles(hover.show);

  // Fetching number of registered users.
  // Lifted state from `MemberCount` component to prevent API calls on every render.
  useEffect(() => {
    axios
      .get("https://ai-club.herokuapp.com/api/user/count")
      .then((res) => {
        console.log(res.data);
        setCount(res.data.count);
      })
      .catch((err) => {
        console.error(err);
        setCount(null);
      });
  }, []);

  return (
    <div className={classes.committeeContainer}>
      {hover.show ? (
        <MemberBackground memberIndex={hover.memberIndex} />
      ) : (
        <div className={classes.memberCountContainer}>
          <MemberCount count={count} setCount={setCount} />
        </div>
      )}
      <div className={classes.sliderContainer}>
        <Slider
          isShown={hover}
          setIsShown={(show, memberIndex = -1) =>
            setHover({
              show: show,
              memberIndex: memberIndex,
            })
          }
        />
      </div>
    </div>
  );
};

export default Committee;
