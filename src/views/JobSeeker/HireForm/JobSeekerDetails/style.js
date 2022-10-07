import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  jobSeekerDetailsWrapper: theme => ({
    '&__title': {
      marginLeft: 40,
      marginBottom: 35,
      fontFamily: FONTS.secondaryFont
    },
    '&__avatar-name-wrapper': {
      marginLeft: 20,
      padding: 15,
      display: "flex"
    },
    '&__avatar': {
      height: 50,
      width: 50
    },
    '&__name': {
      fontSize: 20,
      margin: "0px 0px 15px 15px"
    }
  }),
})

export function JobSeekerDetailsStyle(theme) {
  return useStyles(theme);
}
