import { makeStyles } from "@material-ui/core/styles";

import Landing from "./components/Landing/Landing";
import Committee from "./components/Committee/Committee";

const useStyles = makeStyles({
  root: {
    background: "#F6F6F6",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Landing />
      <Committee />
    </div>
  );
};

export default App;
