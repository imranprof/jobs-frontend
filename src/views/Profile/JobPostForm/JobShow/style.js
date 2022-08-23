import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  jobShowWrapper: theme => ({
    display: 'block',
    '&__divider':{
      margin: "30px 0"
    },
    '&__title': {
      color: theme.palette.customColor.highContrast,
    },
    '&__description': {
      color: theme.palette.customColor.main,
      fontSize:"15px",
      fontFamily: "Helvetica Neue",
      lineHeight:"1.5",
      whiteSpace: "pre-wrap",
    },
    '&__content-header': {
      color: theme.palette.customColor.main,
      margin: "20px 0"
    },
    '&__skills-wrapper': {
      width: "40%",
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
      [theme.breakpoints.down('xs')]: {
        width: "80%"
      }
    },
    '&__location': {
      color: theme.palette.customColor.main,
      fontFamily: "Helvetica Neue",
      fontSize: 15,
    },
    '&__button': {
      marginLeft: 10
    }
  }),
})

export function JobShowStyle(theme) {
  return useStyles(theme);
}
