// Show number of registered members in the club.

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import AnimatedCounter from "./AnimatedCounter/AnimatedCounter";

// Overriding @material ui styles
const useStyles = makeStyles({
  memberCountContainer: {
    padding: 10,
    borderRadius: 50,
    boxShadow: "0 0 500px 50px #FFF",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  text: {
    fontSize: 30,
    color: "#26214F",
    opacity: "50%",
    marginBottom: 20,
  },
  registerButton: {
    borderRadius: 50,
    padding: "5px 20px",
  },
  registerButtonText: {
    fontSize: 20,
  },
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const MemberCount = ({ count, setCount }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      className={classes.wrapper}
    >
      <Grid item>
        <AnimatedCounter count={count} />
      </Grid>
      <Grid item>
        <Typography variant={"h2"} className={classes.text}>
          members and strong
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant={"contained"}
          color={"secondary"}
          onClick={scrollToTop}
          className={classes.registerButton}
        >
          <Typography
            variant={"subtitle2"}
            className={classes.registerButtonText}
          >
            PRE-REGISTER
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default MemberCount;
