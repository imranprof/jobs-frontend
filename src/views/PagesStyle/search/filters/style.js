import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  filtersWrapper: theme => ({
    minWidth: "25%",
    padding: "0 20px",
    // Override Mui checkbox
    '& .MuiFormLabel-root': {
      marginBottom: 10
    },
    '& .MuiTypography-body1': {
      fontSize: 15,
      color: theme.palette.customColor.main,
    },
    '& .MuiCheckbox-root': {
      padding: "7px 9px"
    },
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: theme.palette.customColor.radioButton
    },
    '& .MuiOutlinedInput-root': {
      maxHeight: 30
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-marginDense': {
      transform: "translate(14px, 7px) scale(1)"
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: "translate(14px, -6px) scale(0.75)"
    },
    '&__headline': {
      fontFamily: FONTS.modalTitleFont,
      letterSpacing: "1px",
      marginBottom: 30
    },
    '&__box': {
      marginBottom: 30
    },
    '&__hourly-rate': {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      '&__input': {
        width: 80,
        height: 30
      }
    }
  })
});

export function FiltersStyle(theme) {
  return useStyles(theme);
}
