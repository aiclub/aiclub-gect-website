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

  return (
    <div className={classes.landingContainer}>
      <div className={classes.titleFormContainer}>
        <div />
        <TitleBlock></TitleBlock>
        <div className={classes.registerForm}>
          <RegisterForm></RegisterForm>
        </div>
      </div>
      <div className={classes.animatedEve}>
        <AnimatedEve></AnimatedEve>
      </div>
      <Pattern></Pattern>
    </div>
  );
};

export default Landing;
