// Component to show the name of the member repeated several times in the background

import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// overriding @material ui themes
const useStyles = makeStyles({
  backgroundContainer: {
    positon: "absolute",
    zIndex: 50,
    width: "100%",
    height: "100vh",
  },
  odd: {
    opacity: "19%",
  },
  even: {
    opacity: "9%",
  },
  backgroundText: {
    fontSize: 50,
    width: "100vw",
    color: "#6E61E9",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});

const NameBackground = ({ name }) => {
  let backgroundText = "";
  for (let i = 0; i < 50; ++i) backgroundText += name.toUpperCase() + " ";

  const classes = useStyles();

  return (
    <div className={classes.backgroundContainer}>
      {[...Array(Math.ceil(window.innerHeight / 80))].map((_, index) => {
        return (
          <Typography
            key={index}
            className={
              index % 2
                ? classNames(classes.backgroundText, classes.odd)
                : classNames(classes.backgroundText, classes.even)
            }
          >
            {backgroundText.substring(Math.floor(Math.random() * 20))}
          </Typography>
        );
      })}
    </div>
  );
};

export default NameBackground;
