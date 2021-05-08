// Show number of registered members in the club.

import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import AnimatedCounter from "./AnimatedCounter/AnimatedCounter";
import RegisterForm from "../../Landing/RegisterForm/RegisterForm";

// Overriding @material ui styles
const useStyles = makeStyles((theme) => ({
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

    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
      textAlign: "center",
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
}));

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const MemberCount = ({ count, setCount, small }) => {
  const classes = useStyles();

  // Set whether the form dialog is visible or not
  const [showForm, setShowForm] = useState(false);

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
          onClick={small ? () => setShowForm(true) : scrollToTop}
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
      <Dialog open={showForm} onClose={() => setShowForm(false)}>
        <RegisterForm />
      </Dialog>
    </Grid>
  );
};

export default MemberCount;
