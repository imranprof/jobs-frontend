import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  talentsSearchWrapper: theme => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 250,
    '&__search-title': {
      color: theme.palette.customColor.dark,
      fontFamily: FONTS.modalTitleFont,
      fontWeight: 500
    }
  })
});

export function TalentsSearchStyle(theme) {
  return useStyles(theme);
}
