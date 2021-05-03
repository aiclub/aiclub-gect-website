import { makeStyles } from "@material-ui/core/styles";
import RegisterForm from "./RegisterForm/RegisterForm";
import AnimatedEve  from "./AnimatedEve/AnimatedEve";
import TitleBlock from "./TitleBlock/TitleBlock";

const useStyles = makeStyles({
  landingContainer: {
    position: 'relative',
    height: "100vh",
  },
  top: {
    background: "black",
    height: "90vh",
    width: "100vw",
    maxWidth: "100%",
  },
  registerForm: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    color: 'white'
  },
  animatedEve: {
    position: 'absolute',
    bottom: '0px',
    left: '0px'
  },
  titleBlock:{
    position: 'absolute',
    left: '10%',
    top: '15%',
  }
});

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.landingContainer}>
      <div className={classes.registerForm}>
        <RegisterForm></RegisterForm>
      </div>
      <div className={classes.top}>
      </div>
      <div className={classes.titleBlock}>
        <TitleBlock></TitleBlock>
      </div>
      <div className={classes.animatedEve}>
        <AnimatedEve></AnimatedEve>
      </div>
    </div>
  );
};

export default Landing;
