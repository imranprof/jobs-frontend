import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../styles/fonts";

export const useStyles = makeStyles({
  footerWrapper: theme => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: '26px 56px',
    marginTop: 200,
    '&__logo': {
      width: 60,
      height: 60,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: theme.palette.customBackground.main,
      borderRadius: "50%",
      marginTop: 20,
    },
    '&__logo-img': {
      width: 40,
      height: 40,
    },
    '&__description': {
      fontSize: 17,
      color: theme.palette.customColor.main,
      fontFamily: FONTS.secondaryFont,
    },
    '&__link': {
      textDecoration: "none",
      color: theme.palette.customColor.main,
      display: "inline-block",
      paddingBottom: 2,
      backgroundImage: theme.palette.customBackground.gradiant.highContrast,
      backgroundPosition: "0 100%",
      backgroundSize: "0% 1px",
      backgroundRepeat: "no-repeat",
      transition: "background-size 0.4s, background-position 0.4s, color 0.4s, ease 0s",
      '&:hover': {
        color: theme.palette.customColor.highContrast,
        backgroundPosition: "0 100%",
        backgroundSize: "100% 1px"
      }
    },
    [theme.breakpoints.down('xs')]: {
      '&__logo': {
        width: 50,
        height: 50,
      },
      '&__logo-img': {
        width: 34,
        height: 34,
      },
      '&__description': {
        fontSize: 16,
        textAlign: "center"
      },
    },
  })
});

export function FooterStyle(theme) {
  return useStyles(theme);
}
