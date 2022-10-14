import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../styles/fonts";

const useStyles = makeStyles({
  myJobsWrapper: theme => ({
    '&__applied-offer-wrapper': {
      display: "flex",
      marginBottom: 20,
      width: 210,
      justifyContent: "space-between"
    },
    '&__title': {
      marginBottom: 5,
      fontFamily: FONTS.jobDescriptionFont
    },
    '&__select-line': {
      border: "2px solid #2264C4",
      borderRadius: 5
    },
    '&__title-wrapper': {
      cursor: "pointer"
    }
  }),
})

export function MyJobsStyle(theme) {
  return useStyles(theme);
}
