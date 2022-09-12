import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  messageWrapper: theme => ({
    background: theme.palette.customBackground.gradiant.light,
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    cursor: "pointer",
    '&__avatar-name-Wrapper': {
      display: "flex",
      alignItems: "center"
    },
    '&__avatar': {
      marginRight: "10px",
      height: "32px",
      width: "32px"
    },
    '&__name': {
      fontWeight: 700,
      color: theme.palette.customColor.main
    },
    '&__message-body': {
      marginLeft: "42px",
      color: theme.palette.customColor.main
    }
  })
});

export function MessageStyle(theme) {
  return useStyles(theme);
}
