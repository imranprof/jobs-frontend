import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  showMessageWrapper: theme => ({
    '&__send-message-wrapper': {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "5px"
    },
    '&__send-message-body': {
      display: "flex",
      justifyContent: "center",
      maxWidth: "70%",
      minWidth: "10%",
      padding: "10px",
      marginRight: "15px",
      backgroundColor: theme.palette.customColor.sendMessageBody,
      color: theme.palette.customColor.sendMessageText,
      borderRadius: "20px",
      flexDirection: "column"
    },
    '&__received-message-wrapper': {
      display: "flex",
      justifyContent: "flex-start",
      marginTop: "5px"
    },
    '&__received-message-body': {
      display: "flex",
      justifyContent: "center",
      maxWidth: "70%",
      minWidth: "10%",
      marginBottom: "5px",
      padding: "10px",
      backgroundColor: theme.palette.customColor.receivedMessageBody,
      color: theme.palette.customColor.receivedMessageText,
      marginLeft: "10px",
      borderRadius: "20px",
      flexDirection: "column"
    },
    '&__body-text': {
      whiteSpace: "pre-wrap",
      margin: 0
    },
    '&__message-time': {
      marginBottom: 10, fontSize: "10px"
    },
    '&__message-status': {
      display: "flex",
      justifyContent: "flex-end",
      margin: "0px 10px 7px 0px",
      color: theme.palette.customColor.main,
      fontSize: 12
    },
    '&__seen-message-avatar': {
      height: 14,
      width: 14
    },
    '&__delivered-icon':{
      fontSize: 14
    }
  })
});

export function ShowMessageStyle(theme) {
  return useStyles(theme);
}
