import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  hireWrapper: theme => ({
    backgroundColor: theme.palette.customBackground.hirePaperBg,
    '&__checkbox-title-wrapper': {
      display: "flex",
      alignItems: "center",
      paddingLeft: 15,
      '& .MuiSvgIcon-root': {
        fill: theme.palette.customColor.confirmButton
      }
    },
    '&__buttons-wrapper': {
      padding: "0px 0px 30px 26px",
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
