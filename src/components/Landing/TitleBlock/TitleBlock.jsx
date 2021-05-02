// Main title for Landing page.

import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Overriding @material ui styles
const useStyles = makeStyles({
  size: {
    width: 800,
    height: 300,
  },
  wrapper: {
    position: "relative",
  },
  center: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  color: {
    color: "white",
  },
  title: {
    position: "absolute",
    bottom: "-6px",
  },
  subTitleWrapper: {
    position: "absolute",
  },
  subtitle: {
    opacity: "25%",
    margin: "40px 0",
  },
});

const TitleBlock = () => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.size, classes.wrapper)}>
      <Typography
        variant={"h1"}
        className={classNames(
          classes.size,
          classes.title,
          classes.color,
          classes.center
        )}
      >
        AI CLUB GECT
      </Typography>
      <Grid
        container
        className={classNames(
          classes.size,
          classes.center,
          classes.subTitleWrapper
        )}
      >
        <Grid item>
          <Typography
            variant={"h3"}
            className={classNames(classes.color, classes.subtitle)}
          >
            ENVISIONING A NEW ERA OF
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant={"h3"}
            className={classNames(classes.color, classes.subtitle)}
          >
            ARTIFICIAL INTELLIGENCE
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default TitleBlock;
