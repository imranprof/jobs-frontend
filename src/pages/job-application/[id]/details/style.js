import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  detailsWrapper: theme => ({
    background: theme.palette.customBackground.gradiant.light,
    boxShadow: theme.palette.customShadow.main,
    padding: 40,
    marginBottom: 200,
    '&__divider': {
      margin: "30px 0 30px 0"
    },
    '&__applicant': {
      fontFamily: FONTS.secondaryFont,
      '&-header': {
        fontFamily: FONTS.secondaryFont,
        fontWeight: 500
      },
      '&-title': {
        fontStyle: "italic"
      }
    },
    [theme.breakpoints.down('xs')]: {
      padding: 24
    }
  }),
})

export function DetailsStyle(theme) {
  return useStyles(theme);
}
