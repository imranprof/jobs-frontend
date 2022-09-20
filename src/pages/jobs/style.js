import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../styles/fonts";

const useStyles = makeStyles({
  jobsWrapper: theme => ({
    marginLeft: 30,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    },
    '&__job-search-title': {
      color: theme.palette.customColor.dark,
      fontFamily: FONTS.modalTitleFont,
      fontWeight: 500
    }
  })
});

export function JobsStyle(theme) {
  return useStyles(theme);
}
