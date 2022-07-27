import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  backToHomeBtnWrapper: theme => ({
    position: "absolute",
    width: 30,
    height: 50,
    top: 8,
    left: -30,
    '& a': {
      textDecoration: "none",
    },
    '&__btn': {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      fontSize: 35,
      border: "none",
      color: theme.palette.customColor.highContrast,
      transition: "all 0.2s ease-in",
      '&:hover': {
        color: theme.palette.customColor.backToHomeHover,
        transform: "scale(1.1)"
      }
    },
    [theme.breakpoints.down('xs')]: {
      top: 5,
      left: -20,
      '&__btn': {
        fontSize: 30
      }
    }
  })
});

export function BackToHomeBtnStyle(theme) {
  return useStyles(theme);
}
