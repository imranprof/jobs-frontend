import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  messagesWrapper: theme => ({
    maxHeight: 700,
    '&__parent-child-message-wrapper': {
      display: "flex",
      width: "100%",
      maxHeight: "700px"
    },
    '&__parent-messages-wrapper': {
      width: "30%",
      overflowY: "auto",
      '&::-webkit-scrollbar': {
        width: "10px", /* width of the entire scrollbar */
        background: "#F5F5F5",
      },
      '&::-webkit-scrollbar-thumb': {
        background: "#3C3E41", /* color of the scroll thumb */
        borderRadius: 5, /* roundness of the scroll thumb */
        border: '2px solid rgba(0,0,0,0.2)'
      }
    },
    '&__divider': {
      marginRight: "10px"
    },
    '&__header-receiver-wrapper': {
      display: "flex",
      justifyContent: "space-between",
      '&__receiver-details': {
        display: "flex",
        alignItems: "center",
        width: "70%",
        '&__name': {
          marginLeft: "15px"
        }
      }
    },
    '&__chat-box-field-btn-wrapper':{
      width: "70%",
      minHeight: "700px"
    },
    '&__chat-wrapper': {
      height: "80%",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column-reverse",
      marginBottom: "15px"
    },
    '&__text-field-btn-wrapper': {
      height: "20%",
      marginBottom: "20px"
    },
    '&__send-btn-wrapper':{
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "10px"
    }

  })
});

export function MessagesStyle(theme) {
  return useStyles(theme);
}
