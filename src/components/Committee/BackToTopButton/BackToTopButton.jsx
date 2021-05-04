import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// Scroll to top of page.
const handler = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Overriding @material ui styles
const useStyles = makeStyles({
  circle: {
    height: 60,
    width: 50,
    borderRadius: 50,
  },
});

const BackToTopButton = () => {
  const classes = useStyles();

  return (
    <Button
      variant={"contained"}
      color={"secondary"}
      className={classes.circle}
      onClick={() => handler()}
    >
      <KeyboardArrowUpIcon />
    </Button>
  );
};

export default BackToTopButton;
