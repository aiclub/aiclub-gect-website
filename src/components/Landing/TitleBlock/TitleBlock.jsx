// Main title for Landing page.

import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ArchIcon from "../../../assets/images/landing/arch.png";

// Overriding @material ui styles
const useStyles = makeStyles((theme) => ({
  size: {
    width: 800,
    height: 350,

    [theme.breakpoints.down("md")]: {
      width: 600,
      height: 285,
    },

    [theme.breakpoints.down("xs")]: {
      height: 200,
      width: 400,
    },
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
    fontSize: 90,

    [theme.breakpoints.down("lg")]: {
      fontSize: 75,
    },

    [theme.breakpoints.down("md")]: {
      fontSize: 60,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: 50,
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: 40,
    },
  },
  subTitleWrapper: {
    position: "absolute",
  },
  subtitle: {
    opacity: "25%",
    margin: "5% 0",
    fontSize: 60,

    [theme.breakpoints.down("lg")]: {
      fontSize: 50,
    },

    [theme.breakpoints.down("md")]: {
      fontSize: 45,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  registerButton: {
    borderRadius: 50,
    padding: "5px 20px",

    [theme.breakpoints.down("xs")]: {
      height: 30,
    },
  },
  registerButtonText: {
    fontSize: 20,

    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  archButton: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
  arch: {
    height: 60,
    width: 130,
  },
}));

const TitleBlock = ({ showForm, small = false }) => {
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
      <div className={classes.archButton}>
        {small ? (
          <Button
            variant={"contained"}
            color={"secondary"}
            onClick={() => showForm(true)}
            className={classes.registerButton}
          >
            <Typography
              variant={"subtitle2"}
              className={classes.registerButtonText}
            >
              PRE-REGISTER
            </Typography>
          </Button>
        ) : (
          <img src={ArchIcon} alt="The Great Arch" className={classes.arch} />
        )}
      </div>
    </div>
  );
};

export default TitleBlock;
