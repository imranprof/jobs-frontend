import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../styles/fonts";

export const useStyles = makeStyles({
  searchBarWrapper: theme => ({
    '&__search': {
      width: 350,
      height: 48,
      color: theme.palette.customColor.main,
      border: `2px solid ${theme.palette.customColor.inputBorder}`,
      padding: "0 6px 0 15px",
      fontSize: 14,
      boxShadow: theme.palette.customShadow.dark,
      transition: "all 0.4s ease 0s",
      fontFamily: FONTS.primaryFont,
      borderRadius: 25,
      letterSpacing: 1,
      backgroundColor: theme.palette.customBackground.dark,
      '&:focus': {
        borderColor: theme.palette.customColor.highContrast,
        backgroundColor: theme.palette.customBackground.dark
      },
      '&__icon': {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.customColor.searchBtn,
        background: "transparent",
        width: 32,
        height: 32,
        border: "none",
        borderRadius: "50%",
        transition: "all 0.4s ease",
        '&:hover': {
          color: theme.palette.customColor.highContrast,
        }
      },
    }
  }),
});

export function SearchBarStyle(theme) {
  return useStyles(theme);
}
