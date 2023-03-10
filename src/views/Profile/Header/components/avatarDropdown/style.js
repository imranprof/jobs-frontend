import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../../../styles/fonts";

export const useStyles = makeStyles({
  avatarDropdownWrapper: theme => ({
    '&__avatar': {
      width: 40,
      height: 40,
      backgroundColor: theme.palette.customColor.main,
      border: `1px solid ${theme.palette.customColor.dark}`,
      borderRadius: '50%',
      marginLeft: 10,
      cursor: "pointer"
    },
    '&__popUp': {
      zIndex: 999999999
    },
    '&__arrow': {
      marginTop: "9px",
      position: "relative",
      boxShadow: "none",
      '&::before': {
        background: theme.palette.customBackground.shareBar,
        content: '""',
        display: "block",
        position: "absolute",
        width: 11,
        height: 11,
        top: -6,
        right: 15,
        transform: "rotate(45deg)"
      }
    },
    '&__dropdown': {
      width: 250,
      height: "auto",
      padding: "10px 0",
      background: theme.palette.customBackground.shareBar,
      borderRadius: 7,
    },
    '&__popper': {
      listStyle: "none",
      margin: 0,
      padding: 0,
      '&-list': {
        height: 50,
        display: "flex",
        alignItems: "center",
        padding: "10px 10px 10px 20px",
        '&:hover': {
          backgroundColor: theme.palette.customBackground.light,
          cursor: "pointer"
        },
        '& i': {
          color: theme.palette.customColor.main,
          fontSize: 20,
          margin: "0px 15px 0px 6px"
        },
        '&__item': {
          color: theme.palette.customColor.main,
          fontSize: 15,
          fontFamily: FONTS.secondaryFont,
        }
      }
    },
    '&__nested-popper': {
      width: 200,
      height: "auto",
      padding: "10px 0"
    }
  }),
});

export function AvatarDropdownStyle(theme) {
  return useStyles(theme);
}
