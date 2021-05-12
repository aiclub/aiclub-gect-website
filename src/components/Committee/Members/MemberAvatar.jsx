import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import members from "../../../resources/members";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: 10,
    boxShadow: theme.shadows[5],

    [theme.breakpoints.down("sm")]: {
      width: "70px",
      height: "70px",
      margin: 5,

      ":&hover": {
        width: "80px",
        height: "80px",
        margin: 0,
      },
    },
  },
}));

const MemberAvatar = ({ setSelect, index }) => {
  const classes = useStyles();

  return (
    <Avatar
      onMouseOver={() => setSelect(true, index)}
      onMouseDown={() => setSelect(true, index)}
      alt={members[index].name}
      src={members[index].picture.cartoon}
      className={classes.avatar}
    />
  );
};

export default MemberAvatar;
