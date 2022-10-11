import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  messageWrapper: theme => ({
    background: theme.palette.customBackground.gradiant.light,
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    cursor: "pointer",
    '&__full': {
      display: "flex",
    },
    '& .selected-border': {
      height: "auto",
      borderLeft: `4px solid ${theme.palette.customColor.sendMessageBody}`,
      marginRight: 10
    },
    '&__name-badge-wrapper': {
      display: "flex"
    },
    '&__avatar-name-Wrapper': {
      display: "flex",
      alignItems: "center",
      '& .MuiBadge-anchorOriginTopRightRectangle': {
        marginRight: 7,
        marginTop: 5
      }
    },
    '&__avatar': {
      marginRight: "10px",
      height: "32px",
      width: "32px",
      [theme.breakpoints.down('xs')]: {
        width: 28,
        height: 28,
      }
    },
    '&__name': {
      fontWeight: 700,
      color: theme.palette.customColor.main,
      marginRight: 20,
    },
    '&__message-body': {
      marginLeft: "42px",
      color: theme.palette.customColor.main,
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    [theme.breakpoints.down('xs')]: {
      width: "97%",
      '&__avatar': {
        width: 28,
        height: 28,
      },
      '&__message-body': {
        marginLeft: 38,
        fontSize: 12
      }
    }
  })
});

export function MessageStyle(theme) {
  return useStyles(theme);
}
