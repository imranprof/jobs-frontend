import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../styles/fonts";

const useStyles = makeStyles({
  sectionHeaderWrapper: theme => ({
    margin: 30,
    '& h1': {
      color: theme.palette.customColor.main,
      fontFamily: FONTS.primaryFont,
      fontWeight: 700,
      lineHeight: "50px",
      textTransform: "capitalize",
    },
    [theme.breakpoints.down('sm')]: {
      margin: 14,
      '& h1': {
        fontSize: 20
      }
    },
    [theme.breakpoints.down('xs')]: {
      margin: 14,
      '& h1': {
        fontSize: 14,
        textAlign: "center",
        lineHeight: "30px",
      }
    },
  })
});

export function SectionHeaderStyle(theme) {
  return useStyles(theme);
}
