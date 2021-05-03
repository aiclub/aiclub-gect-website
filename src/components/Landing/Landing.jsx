// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import RegisterForm from "./RegisterForm/RegisterForm";

const useStyles = makeStyles({
  // Remove this class during development
  tempClass: {
    height: '100vh',
  },
  top: {
    background: 'black',
    height: '75%',
    width: '100%',
  }
});

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.tempClass}>
      <div className={classes.top}>
        <RegisterForm className={classes.registerForm}></RegisterForm>
      </div>
    </div>
  );
};

export default Landing;
