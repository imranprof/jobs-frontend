import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../styles/fonts";

const useStyles = makeStyles({
  locationWrapper: theme => ({
    display: "flex",
    marginTop: 5,
    '&__location': {
      width: "40%",
      height: 35,
      marginRight: 10,
      padding: 5,
      fontSize: 14,
      borderRadius: 3,
      border: "1px solid rgba(0,0,0,0.25)",
      color: theme.palette.customColor.dark,
      background: theme.palette.customBackground.dark,
      '&:focus': {
        background: theme.palette.customBackground.dark,
        color: theme.palette.customColor.dark,
        fontSize: 14,
      },
      '&-text': {
        fontSize: 18,
        fontWeight: 400,
        color: theme.palette.customColor.dark,
        fontFamily: FONTS.secondaryFont,
        lineHeight: "30px",
        display: "block",
        marginRight: 10,
        [theme.breakpoints.down('xs')]: {
          fontSize: 16,
          lineHeight: "26px"
        },
      }
    }
  })
});

export function LocationStyle(theme) {
  return useStyles(theme);
}
