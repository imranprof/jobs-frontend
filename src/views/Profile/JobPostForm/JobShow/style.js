import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  jobShowWrapper: theme => ({
    display: 'block',
    '&__button-wrapper': {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      '&-btn': {
        backgroundColor: theme.palette.customColor.highContrast,
        marginTop: 30,
      }
    },
    '&__title': {
      color: theme.palette.customColor.highContrast,
      '&__divider':{
        marginTop:"30px",
        marginBottom:"30px"
      }
    },
    '&__description': {
      color: theme.palette.customColor.main,
      fontSize:"15px",
      fontFamily: "Helvetica Neue",
      lineHeight:"1.5",
      whiteSpace: "pre-wrap",
      '&__divider':{
        marginTop:"70px"
      }
    },
    '&__skills-header': {
      color: theme.palette.customColor.highContrast,
      marginTop:"20px",
      marginBottom:"20px"
    },
    '&__skills-wrapper': {
      width: "250px",
      display:"flex",
      flexWrap:"wrap",
      alignItems:"center",
      overflow: "hidden",
      '&__skill': {
        display: "inline-table",
        width: "auto",
        height: 10,
        background: theme.palette.customBackground.skillBackground,
        padding: "0 5px 2px 5px",
        borderRadius: 5,
        margin: 3,
        fontSize: 11
      },
      '&__divider': {
        marginTop:30
      }
    },
    '&__about-header': {
      color: theme.palette.customColor.highContrast,
      marginTop:"20px",
      marginBottom:"20px"
    },
    '&__location': {
      color: theme.palette.customColor.main,
      fontFamily: "Helvetica Neue",
      fontSize: 15,
      '&__divider': {
        margin: "30px 0px 30px 0px"
      }
    }

  }),
})

export function JobShowStyle(theme) {
  return useStyles(theme);
}
