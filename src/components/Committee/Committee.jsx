import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  // Remove this class during development
  tempClass: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Committee = () => {
  const classes = useStyles();

  return (
    <div className={classes.tempClass}>
      <Typography variant={"subtitle2"}>Committee Page</Typography>
    </div>
  );
};

export default Committee;
