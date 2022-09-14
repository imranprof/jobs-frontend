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
      marginBottom: "5px",
      padding: "10px",
      marginRight: "10px",
      backgroundColor: "#0084FF",
      color: "#F9F9FD",
      borderRadius: "20px"
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
      backgroundColor: "#3E4042",
      color: "#F9F9FD",
      marginLeft: "10px",
      borderRadius: "20px",
    },
    '&__body-text': {
      whiteSpace: "pre-wrap",
      margin: 0
    }
  })
});

export function ShowMessageStyle(theme) {
  return useStyles(theme);
}
