import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  hiredWrapper: theme => ({
    display: "flex",
    justifyContent: "center",
    maxHeight: 400,
    '&__content-wrapper': {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: 10,
      padding: 40,
      [theme.breakpoints.down('xs')]: {
        padding: 10
      }
    },
    '&__image': {
      height: 169,
      width: 300
    },
    '&__text': {
      textAlign: "center",
      fontFamily: FONTS.jobDescriptionFont,
      color: theme.palette.customColor.main
    }
  }),
})

export function HiredStyle(theme) {
  return useStyles(theme);
}
