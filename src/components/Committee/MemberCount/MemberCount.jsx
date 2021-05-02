// Show number of registered members in the club.

import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import AnimatedCounter from "./AnimatedCounter/AnimatedCounter";

// Overriding @material ui styles
const useStyles = makeStyles({
  text: {
    fontSize: 30,
    color: "#26214F",
    opacity: "50%",
    marginBottom: 20,
  },
  registerButton: {
    borderRadius: 50,
    padding: "5px 20px",
  },
  registerButtonText: {
    fontSize: 20,
  },
});

const MemberCount = () => {
  const [count, setCount] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://ai-club.herokuapp.com/api/user/count")
      .then((res) => {
        console.log(res.data);
        setCount(res.data.count);
      })
      .catch((err) => {
        console.error(err);
        setCount(null);
      });
  }, []);

  return (
    <Grid container direction={"column"} alignItems={"center"}>
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
    </Grid>
  );
};

export default MemberCount;
