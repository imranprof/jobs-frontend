import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../styles/fonts";

export const useStyles = makeStyles({
  logoWrapper: theme => ({
    '&__logo': {
      textDecoration: "none",
      color: theme.palette.customColor.main,
      display: "inline-block",
      backgroundImage: theme.palette.customBackground.gradiant.highContrast,
      backgroundPosition: "0 100%",
      backgroundSize: "0% 1px",
      backgroundRepeat: "no-repeat",
      transition: "background-size 0.4s, background-position 0.4s, color 0.4s, ease 0s",
      '& h1': {
        fontSize: 24,
        margin: 0,
        letterSpacing: "1px",
        fontFamily: FONTS.logoFont
      },
      '&:hover': {
        color: theme.palette.customColor.highContrast,
        backgroundPosition: "0 100%",
        backgroundSize: "100% 1px"
      }
    }
  }),
});

export function LogoStyle(theme) {
  return useStyles(theme);
}
