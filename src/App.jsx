import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Landing from "./components/Landing/Landing";
import Committee from "./components/Committee/Committee";
import MembersPage from "./components/Committee/Members/MembersPage";

const useStyles = makeStyles({
  root: {
    background: "#000000",
  },
});

const App = () => {
  const classes = useStyles();
  // smallScreen is true for small screens.
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
    <div className={classes.root}>
      <Landing small={smallScreen} />
      <Committee small={smallScreen} />
      {/* For small screens, render committee members in a new page */}
      {smallScreen && <MembersPage />}
    </div>
  );
};

export default App;
