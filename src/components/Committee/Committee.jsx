import { makeStyles } from "@material-ui/core/styles";
import Slider from "./Members/SlidingProfile"
const useStyles = makeStyles({
  // Remove this class during development
  committeeContainer: {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  imagePlaceholder: {
    minHeight: "40vh"
  },
  sliderContainer: {
    // minHeight: "60vh"
    marginBottom: "20px"
  }
});

const Committee = () => {
  const classes = useStyles();

  return (
    <div className={classes.committeeContainer}>
      <div className={classes.imagePlaceholder}>
      </div>
      <div className={classes.sliderContainer}>
        <Slider></Slider>
      </div>

    </div>
  );
};

export default Committee;
