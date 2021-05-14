// Animate counter from 1 to max in 1000 milliseconds.

import { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Overriding @material ui styles
const useStyles = makeStyles(theme => ({
  count: {
    color: "#FFFFFF",

    [theme.breakpoints.down("sm")]: {
      fontSize: 75,
    }
  },
}));

const AnimatedCounter = ({ count }) => {
  const [counter, setCounter] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    let start = 0;
    if (start >= count) return;

    let timer = setInterval(() => {
      start += 1;
      setCounter(start);
      if (start >= count) clearInterval(timer);
    }, 1000 / count);
  }, [count]);

  return (
    <Typography variant={"h2"} className={classes.count}>
      {counter}
    </Typography>
  );
};

export default AnimatedCounter;
