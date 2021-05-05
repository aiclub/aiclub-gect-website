import React from "react";

import FilledInput from "@material-ui/core/FilledInput";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../../../assets/fonts/Lato/Lato-Regular.ttf";
import "../../../assets/fonts/Poppins/Poppins-ExtraBold.ttf";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  formdiv: {
    background: "#F6F6F6",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",

    [theme.breakpoints.down("md")]: {
      width: "325px",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  form: {
    background: "#F6F6F6",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
  },

  heading: {
    fontFamily: "Poppins",
    fontSize: "25px",
    color: "#15497B",
  },

  names: {
    background: "#F6F6F6",
    display: "flex",
    justifyContent: "space-between",
    width: "inherit",
  },

  filledName: {
    background: "#e6efff",
    borderRadius: "10px",
    fontFamily: "Lato",
    margin: "5px 0",
    "&:hover": {
      background: "#EBF2FF",
    },
    "&.Mui-focused": {
      background: "#EBF2FF",
    },
  },

  filledInput: {
    background: "#e6efff",
    borderRadius: "10px",
    fontFamily: "Lato",
    margin: "5px 0",
    "&:hover": {
      background: "#EBF2FF",
    },
    "&.Mui-focused": {
      background: "#EBF2FF",
    },
  },

  checkControl: {
    fontFamily: "Lato",
    color: "grey",
    margin: "10px 0",
  },

  checkBox: {
    color: "blue",
    "&$checked": {
      color: "blue",
    },
  },

  submit: {
    background: "#0158AE",
    color: "white",
    textTransform: "none",
  },
}));

const RegisterForm = () => {
  const classes = useStyles();

  const [data, setData] = React.useState({
    first: "",
    last: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [states, setStates] = React.useState({
    showPassword: false,
    showConfirm: false,
    notMatched: false,
    check: false,
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const ShowPassword = (event) => {
    setStates({
      ...states,
      showPassword: !states.showPassword,
    });
  };

  const ShowConfirm = (event) => {
    setStates({
      ...states,
      showConfirm: !states.showConfirm,
    });
  };

  const handleChecked = (event) => {
    setStates({
      ...states,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    if (data.password !== data.confirm) {
      alert("Passwords do not match");
      event.preventDefault();
    } else {
      console.log(data);
      axios
        .post("https://ai-club.herokuapp.com/api/user/register", {
          firstName: data.first,
          lastName: data.last,
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          console.log(response.data);
          setData({
            first: "",
            last: "",
            email: "",
            password: "",
            confirm: "",
          });
        })
        .catch((error) => {
          if (error.response.data.code === "USEREXISTS") {
            alert("Email is already in use");
          }
        });
      event.preventDefault();
    }
  };

  return (
    <div className={classes.formdiv}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography className={classes.heading} gutterBottom>
          Hello! <br /> Pre-Register to <br></br> AI club today!
        </Typography>
        <div className={classes.names}>
          <FilledInput
            placeholder="First Name"
            className={classes.filledName}
            style={{ marginRight: 5 }}
            name="first"
            value={data.first}
            onChange={handleChange}
            disableUnderline={true}
            required={true}
          />
          <FilledInput
            placeholder="Last Name"
            className={classes.filledName}
            style={{ marginLeft: 5 }}
            name="last"
            value={data.last}
            onChange={handleChange}
            disableUnderline={true}
          />
        </div>
        <FilledInput
          placeholder="Email Address"
          className={classes.filledInput}
          name="email"
          value={data.email}
          onChange={handleChange}
          disableUnderline={true}
          required={true}
        />
        <FilledInput
          type={states.showPassword ? "text" : "password"}
          placeholder="Password"
          className={classes.filledInput}
          name="password"
          value={data.password}
          onChange={handleChange}
          disableUnderline={true}
          required={true}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={ShowPassword}
              >
                {states.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FilledInput
          type={states.showConfirm ? "text" : "password"}
          placeholder="Confirm Password"
          className={classes.filledInput}
          name="confirm"
          value={data.confirm}
          onChange={handleChange}
          disableUnderline={true}
          required={true}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={ShowConfirm}
              >
                {states.showConfirm ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormControlLabel
          className={classes.checkControl}
          control={
            <Checkbox
              className={classes.checkBox}
              checked={states.check}
              onChange={handleChecked}
              name="check"
              required={true}
            />
          }
          label="I agree to learn, collaborate and contribute"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.submit}
          type="submit"
        >
          Pre-Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
