import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../styles/fonts";

const useStyles = makeStyles({
  jobsWrapper: theme => ({
    marginLeft: 30,
    marginBottom: 250,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    },
    '&__jobs': {
      width: "100%",
      '&-header': {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        '& .fa-sliders': {
          fontSize: 16
        },
        '& .MuiButton-outlinedSizeSmall': {
          height: 34
        },
        '& .MuiButton-root': {
          color: theme.palette.customColor.main,
        },
      },
    },
    '&__job-filters-wrapper': {
      width: "100%",
      display: "flex"
    },
    '&__job-search-title': {
      color: theme.palette.customColor.dark,
      fontFamily: FONTS.modalTitleFont,
      fontWeight: 500,
      marginLeft: 30,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0
      },
    },
    '&__filters-sidebar': {
      background: theme.palette.customBackground.sideBar,
      padding: '10px 25px 20px 25px',
      height: "100vh",
      '&__wrapper': {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 16,
        '&__close-icon': {
          color: theme.palette.customColor.highContrast,
          width: 35,
          height: 35,
        }
      },
      [theme.breakpoints.down('md')]: {
        width: 300,
      }
    }
  })
});

export function JobsStyle(theme) {
  return useStyles(theme);
}
