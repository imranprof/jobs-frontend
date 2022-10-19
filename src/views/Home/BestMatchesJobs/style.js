import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../styles/fonts";

export const useStyles = makeStyles({
  bestMatchesJobsWrapper: theme => ({
    display: "flex",
    width: "100%",
    '&__best-matches-header-wrapper': {
      margin: "0px 50px",
    },
    '&__title': {
      marginBottom: 5,
      fontFamily: FONTS.modalTitleFont,
      textAlign: "center",
      letterSpacing: "1px",
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      }
    },
    '&__selected-title': {
      marginBottom: 5,
      fontFamily: FONTS.modalTitleFont,
      textAlign: "center",
      letterSpacing: "1px",
      color: theme.palette.customColor.jobType,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      }
    },
    '&__select-line': {
      border: `1px solid ${theme.palette.customColor.jobType}`,
      borderRadius: 5,
      marginBottom: 0,
      width: 150
    },
    '&__title-wrapper': {
      cursor: "pointer"
    },
    '&__mui-divider': {
      marginBottom: 30
    }
  })
});

export function BestMatchesJobsStyle(theme) {
  return useStyles(theme);
}
