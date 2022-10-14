import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../styles/fonts";

export const useStyles = makeStyles({
  avatarProfileInfoWrapper: theme => ({
    display: "flex",
    alignItems: "center",
    '&__avatar': {
      width: 30,
      height: 30,
      backgroundColor: theme.palette.customColor.main,
      borderRadius: '50%',
      '&__name': {
        color: theme.palette.customColor.highContrast,
        fontSize: 14,
        fontFamily: FONTS.primaryFont,
        fontWeight: 600,
        margin: "0 0 0 12px"
      },
      '&__type': {
        color: theme.palette.customColor.dark,
        fontSize: 12,
        fontFamily: FONTS.secondaryFont,
        margin: "0 0 0 12px"
      }
    }
  }),
});

export function AvatarProfileInfoStyle(theme) {
  return useStyles(theme);
}
