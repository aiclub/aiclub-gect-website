import axios from "axios";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Slider from "./Members/SlidingProfile";
import MemberCount from "./MemberCount/MemberCount";
import BackToTopButton from "./BackToTopButton/BackToTopButton";
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
  backToTopButtonContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 30,
    zIndex: 50,
  },
});

const Committee = ({ small }) => {
  // Get the current member being hovered.
  const [count, setCount] = useState(0);

  // Get the currently hovered member.
  const [hover, setHover] = useState({ show: false, memberIndex: -1 });

  const classes = useStyles();

  // Fetching number of registered users.
  // Lifted state from `MemberCount` component to prevent API calls on every render.
  useEffect(() => {
    axios
      .get("https://ai-club.herokuapp.com/api/user/count")
      .then((res) => {
        setCount(res.data.count);
      })
      .catch((err) => {
        console.error(err);
        setCount(null);
      });
  }, []);

  // Define scroll listener.
  // Clears the committe page on scroll to top.
  const scrollListener = () => {
    if (window.pageYOffset === 0) setTimeout(() => setHover(false), 250);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className={classes.committeeContainer}>
      {hover.show ? (
        <MemberBackground memberIndex={hover.memberIndex} />
      ) : (
        <div className={classes.memberCountContainer}>
          <MemberCount count={count} setCount={setCount} small={small} />
        </div>
      )}

      {/* Render profile slider for large screens */}
      {!small && (
        <>
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
          {hover.show && (
            <div className={classes.backToTopButtonContainer}>
              <BackToTopButton />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Committee;
