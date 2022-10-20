import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../styles/fonts";

const useStyles = makeStyles({
  filtersWrapper: theme => ({
    minWidth: "25%",
    padding: "0 20px",
    // Override Mui checkbox
    '& .MuiFormLabel-root': {
      marginBottom: 10
    },
    '& .MuiTypography-body1': {
      fontSize: 15
    },
    '& .MuiCheckbox-root': {
      padding: "7px 9px"
    },
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: theme.palette.customColor.radioButton
    },
    '&__headline': {
      fontFamily: FONTS.modalTitleFont,
      letterSpacing: "1px",
      marginBottom: 30
    },
    '&__box': {
      marginBottom: 30
    }
  })
});

export function FiltersStyle(theme) {
  return useStyles(theme);
}
