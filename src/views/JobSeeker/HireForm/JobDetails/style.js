import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  jobDetailsWrapper: theme => ({
    '&__heading': {
      marginLeft: 30,
      paddingTop: 20
    },
    '&__title-description-wrapper': {
      marginLeft: 25,
      padding: 5
    },
    '&__description': {
      whiteSpace: "pre-wrap",
      marginBottom: 25,
      fontSize: "15px",
      fontFamily: FONTS.jobDescriptionFont,
      lineHeight: "1.5"
    }

  }),
})

export function JobDetailsStyle(theme) {
  return useStyles(theme);
}
