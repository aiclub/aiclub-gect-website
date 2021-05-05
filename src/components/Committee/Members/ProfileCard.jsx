import { makeStyles } from '@material-ui/core/styles';
import members from "../../../resources/members";
import Avatar from '@material-ui/core/Avatar';
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

const useStyles = makeStyles((theme)=>({
    cardContainer: {
        position: "absolute",
        width: "358px",
        height: "229px",
        left: "30px",
        top: "-240px",

    },
    memberCard: {
        position: "absolute",
        width: "358px",
        height: "198px",
        left: "0px",
        top: "37px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
       
        
    },

    // Profile Pic
    memberPic: {
        position: "absolute",
        left: "18px",
        top: "0px",
        zIndex: 1,
    },
    avatarSize: {
        width: "95px",
        height: "95px",
        border: "3px solid #288FB0",
        boxSizing: "border-box",
        borderRadius: "20px",
        

      },
    // member name div
    memberName: {
        position: "absolute",
        width: "196px",
        height: "30px",
        left: "122px",
        top: "11px",

        fontFamily: "Lato",
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '23px',
        lineHeight: '30px',
        textAlign: 'left',
        color: '#000000',
        whiteSpace: "nowrap",
        overflow: "hidden",
        
    
    },
    memberPosition: {
        position: "absolute",
        height: "18px",
        left: "122px",
        top: "41px",

        fontFamily: "Lato",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '15px',
        lineHeight: '18px',
        textAlign: 'left',
        color: '#CDCDCD',
        
    },
    memberGroup: {
        position: "absolute",
        height: "18px",
        left: "235px",
        top: "41px",

        fontFamily: "Lato",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '15px',
        lineHeight: '18px',
        textAlign: 'right',
        color: '#CDCDCD',
        textTransform: "uppercase",
    },
    contactIcon1: {
        position: "absolute",
        width: "22px",
        height: "22px",
        left: "120px",
        top: "65px",
        
        [theme.breakpoints.down("md")]:{
            left: '110px',
            top: '30px'
        }
    },
    contactIcon2: {
        position: "absolute",
        width: "22px",
        height: "22px",
        left: "162px",
        top: "65px",
        
    },
    memberQuote: {
        position: "absolute",
        width: "312px",
        height: "51px",
        left: "23px",
        top: "95px",

        fontFamily: "Lato",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '17px',
        textAlign: 'center',
        color: '#727272',
    

    },
    
    
  }));

  const Profile = ({ memberIndex }, {mouseX}) => {
      const classes = useStyles();
      console.log(mouseX)
      return (
        // className={{ left: {mouseX} }}
        <div className={classes.cardContainer}  >
          <div className={classes.memberPic}>
            <Avatar variant="rounded" alt="Remy Sharp" src={members[memberIndex].picture.cartoon} className={classes.avatarSize} />
          </div>
          <Card className={classes.memberCard}>
            <div className={classes.memberName}>{members[memberIndex].name}</div>
            <div className={classes.memberPosition}>{members[memberIndex].position}</div>
            <div className={classes.memberGroup}>{members[memberIndex].group}</div>
            <IconButton color={"primary"} className={classes.contactIcon1} onClick={()=> window.open(members[memberIndex].linkedIn, "_blank")}><LinkedInIcon /></IconButton>
            <IconButton color={"secondary"} className={classes.contactIcon2} onClick={()=> window.open("https://gmail.com", "_blank")}><EmailRoundedIcon /></IconButton>
            <div className={classes.memberQuote}>{members[memberIndex].description}</div>
          </Card>
        </div>
      );
  };

  export default Profile;