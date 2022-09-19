import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../styles/fonts";
let selectTheme;

export const useStyles = makeStyles({
  searchBarWrapper: theme => (
    selectTheme = theme,
    {
    '&__search': {
      position: "relative",
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
      [theme.breakpoints.down('md')]: {
        width: "100%",
        marginTop: 25,
      }
    }
  }),
});

export const selectStyles = {
  control: (styles)=> ({
    ...styles,
    background: "transparent",
    border: 0
  }),
  valueContainer: (styles)=> ({
    ...styles,
    display: "none"
  }),
  indicatorSeparator: (styles)=> ({
    ...styles,
    display: "none"
  }),
  container: (styles) => ({
    ...styles,
    position: "unset"
  }),
  menu: (styles) => ({
    ...styles,
    left: 0,
    backgroundColor: selectTheme.palette.customBackground.dark
  }),
  option: (styles) => ({
    ...styles,
    backgroundColor: selectTheme.palette.customBackground.dark,
    '&:hover': {
      background: selectTheme.palette.customHoverBackground.searchHover,
    }
  })
};

export function SearchBarStyle(theme) {
  return useStyles(theme);
}
