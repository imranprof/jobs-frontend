import {makeStyles} from "@material-ui/core/styles";

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
      height: 200,
      padding: "10px 0",
      background: theme.palette.customBackground.shareBar,
      borderRadius: 7,
    },
    '&__popper': {
      listStyle: "none",
      margin: 0,
      padding: 0,
      '&-list': {
        display: "flex",
        alignItems: "center",
        padding: "10px 10px 10px 20px",
        '&:hover': {
          backgroundColor: theme.palette.customBackground.light,
          cursor: "pointer"
        }
      }
    },
    '&__popper-avatar': {
      width: 36,
      height: 36,
      backgroundColor: theme.palette.customColor.main,
      borderRadius: '50%',
      '&__name': {
        color: theme.palette.customColor.highContrast,
        fontSize: 15,
        fontWeight: 600,
        margin: "0 0 0 10px"
      },
      '&__type': {
        color: theme.palette.customColor.dark,
        fontSize: 12,
        margin: "0 0 0 10px"
      }
    }
  }),
});

export function AvatarDropdownStyle(theme) {
  return useStyles(theme);
}
