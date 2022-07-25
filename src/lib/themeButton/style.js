import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  themeButtonWrapper: theme => ({
    margin: 0,
    position: "fixed",
    bottom: 50,
    left: 30,
    zIndex: 999,
    borderRadius: "50%",
    backgroundColor: theme.palette.customBackground.light,
    boxShadow: theme.palette.customShadow.themeButton,
    transition: "all 0.4s",
    '&:hover': {
      backgroundColor: theme.palette.customBackground.dark,
    },
    '&__theme-button__container': {
      borderRadius: "50%",
      '& button': {
        '&:hover': {
          backgroundColor: theme.palette.customBackground.dark
        }
      }
    },
    '&__light-theme__icon': {
      fill: "#FFCC33",
    },
    '& i': {
      color: "#000000",
    },
  })
});

export function ThemeButtonStyle(theme) {
  return useStyles(theme);
}
