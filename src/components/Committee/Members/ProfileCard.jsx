import { makeStyles } from '@material-ui/core/styles';
import members from "../../../resources/members";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({

    cardContainer: {
        position: "absolute",
        width: "358px",
        height: "229px",
        left: "30px",
        top: "-240px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))"
    },
    memberCard: {
        position: "absolute",
        width: "358px",
        height: "198px",
        left: "0px",
        top: "37px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))",
        background: "#FFFFFF",
        boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px"
    },
    memberPic: {
        position: "absolute",
        // width: "95px",
        // height: "95px",
        left: "18px",
        top: "0px",
        zIndex: 1,
        // background: 'grey',
        // border: "3px solid #288FB0",
        // boxSizing: "border-box",
        // borderRadius: "20px"
    },
    
    memberName: {
        position: "absolute",
        width: "196px",
        height: "30px",
        left: "122px",
        top: "11px",

        fontFamily: "Lato",
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '25px',
        lineHeight: '30px',
        textAlign: 'left',
        letterSpacing: '0.05em',
        color: '#000000'
    },
    memberPosition: {
        position: "absolute",
        width: "100px",
        height: "18px",
        left: "122px",
        top: "41px",

        fontFamily: "Lato",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '15px',
        lineHeight: '18px',
        textAlign: 'left',
        color: '#CDCDCD'
    },
    memberGroup: {
        position: "absolute",
        width: "83px",
        height: "18px",
        left: "235px",
        top: "41px",

        fontFamily: "Lato",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '15px',
        lineHeight: '18px',
        textAlign: 'right',
        color: '#CDCDCD'
    },
    contactIcon1: {
        position: "absolute",
        width: "22px",
        height: "22px",
        left: "128px",
        top: "67px",

        background: '#C4C4C4'
    },
    contactIcon2: {
        position: "absolute",
        width: "22px",
        height: "22px",
        left: "162px",
        top: "67px",

        background: '#C4C4C4'
    },
    memberQuote: {
        position: "absolute",
        width: "312px",
        height: "51px",
        left: "23px",
        top: "100px",

        fontFamily: "Lato",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '17px',
        textAlign: 'center',
        color: '#727272'
    },
    avatarSize: {
        width: "95px",
        height: "95px",
        border: "3px solid #288FB0",
        boxSizing: "border-box",
        borderRadius: "20px"
      }
  });

  const Profile = ({ memberIndex }, {mouseX}) => {
      const classes = useStyles();
      console.log(mouseX)
      return (
        // className={{ left: {mouseX} }}
        <div className={classes.cardContainer}  >
          <div className={classes.memberPic}>
            <Avatar variant="rounded" alt="Remy Sharp" src={members[memberIndex].picture.cartoon} className={classes.avatarSize} />
          </div>
          <div className={classes.memberCard}>
            <div className={classes.memberName}>{members[memberIndex].name}</div>
            <div className={classes.memberPosition}>{members[memberIndex].position}</div>
            <div className={classes.memberGroup}>{members[memberIndex].group}</div>
            <div className={classes.contactIcon1}></div>
            <div className={classes.contactIcon2}></div>
            <div className={classes.memberQuote}>{members[memberIndex].description}</div>
          </div>
        </div>
      );
  };

  export default Profile;