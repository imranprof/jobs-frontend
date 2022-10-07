import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  hireWrapper: theme => ({
    '&__checkbox-title-wrapper': {
      display: "flex",
      alignItems: "center",
      '& .MuiSvgIcon-root': {
        fill: theme.palette.customColor.confirmButton
      }
    },
    '&__buttons-wrapper': {
      padding: 15,
      display: "flex"
    },
    '&__confirm-button-wrapper': {
      marginRight: 10
    },
    '&__button': {
      color: "white",
      backgroundColor: theme.palette.customColor.confirmButton,
      '&:hover': {
        backgroundColor: theme.palette.customBackground.buttonHover
      }
    }
  }),
})

export function HireStyle(theme) {
  return useStyles(theme);
}
