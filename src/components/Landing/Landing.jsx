import { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";

import RegisterForm from "./RegisterForm/RegisterForm";
import AnimatedEve from "./AnimatedEve/AnimatedEve";
import TitleBlock from "./TitleBlock/TitleBlock";
import Pattern from "./Pattern/Pattern";

const useStyles = makeStyles({
  landingContainer: {
    position: "relative",
    height: "100vh",
  },

  registerForm: {
    margin: 20,
  },

  animatedEve: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
  },

  titleFormContainer: {
    position: "absolute",
    width: "100vw",
    display: "flex",
    height: "90vh",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});

const Landing = () => {
  const classes = useStyles();

  const [showForm, setShowForm] = useState(false);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 960);

  // Listener for checking screen resize
  const updateMedia = () => {
    setSmallScreen(window.innerWidth <= 960);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className={classes.landingContainer}>
      <div className={classes.titleFormContainer}>
        <div />
        <TitleBlock small={smallScreen} showForm={setShowForm}></TitleBlock>
        {!smallScreen ? (
          <div className={classes.registerForm}>
            <RegisterForm></RegisterForm>
          </div>
        ) : (
          <div />
        )}
      </div>
      <div className={classes.animatedEve}>
        <AnimatedEve></AnimatedEve>
      </div>
      <Pattern></Pattern>
      <Dialog open={showForm} onClose={() => setShowForm(false)}>
        <RegisterForm></RegisterForm>
      </Dialog>
    </div>
  );
};

export default Landing;
