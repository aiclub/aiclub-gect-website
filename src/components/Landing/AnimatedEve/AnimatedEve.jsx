// Animated Eve from movie Wall-E

import { makeStyles } from "@material-ui/core/styles";

import Eve from "../../../assets/images/landing/eve.png";
import EveSquare from "../../../assets/images/landing/eve_square.svg";
import EveTriangle from "../../../assets/images/landing/eve_triangle.svg";

// Importing @keyframe animations
import "./AnimatedEve.css";

// Overriding @material-ui styles
const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    width: 325,
    height: 325,

    [theme.breakpoints.down("sm")]: {
      width: 217,
      height: 217,
    },
  },
  eve: {
    top: 0,
    left: "-10%",
    zIndex: 30,
    position: "absolute",
  },
  eveSquare: {
    zIndex: 10,
    left: "-18%",
    top: "15%",
    position: "absolute",
  },
  eveTriangle: {
    zIndex: 20,
    bottom: 0,
    left: "30%",
    position: "absolute",
  },
}));

const AnimatedEve = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.eveSquare}>
        <img alt="Eve Square" className="eve-square" src={EveSquare} />
      </div>
      <div className={classes.eveTriangle}>
        <img alt="Eve Triangle" className="eve-triangle" src={EveTriangle} />
      </div>
      <div className={classes.eve}>
        <img alt="Eve" className="eve" src={Eve} />
      </div>
    </div>
  );
};

export default AnimatedEve;
