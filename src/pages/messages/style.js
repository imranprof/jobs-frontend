import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../styles/fonts";

export const useStyles = makeStyles({
  messagesWrapper: theme => ({
    backgroundColor: theme.palette.customBackground.dark,
    border: `2px solid ${theme.palette.customColor.inputBorder}`,
    borderRadius: 24,
    boxShadow: theme.palette.customShadow.dark,
    '&__current-user-avatar': {
      width: 40,
      height: 40,
      borderRadius: '50%',
      marginRight: 20,
    },
    '&__parent-child-message-wrapper': {
      display: "flex",
      width: "100%",
      maxHeight: 850
    },
    '&__parent-messages-wrapper': {
      width: "30%",
      margin: "0 10px",
      paddingTop: 14,
      overflowY: "auto",
      '&::-webkit-scrollbar': {
        width: "10px", /* width of the entire scrollbar */
        background: "#F5F5F5",
      },
      '&::-webkit-scrollbar-thumb': {
        background: "#3C3E41", /* color of the scroll thumb */
        borderRadius: 5, /* roundness of the scroll thumb */
        border: '2px solid rgba(0,0,0,0.2)'
      },
      [theme.breakpoints.down('xs')]: {
        width: "40%"
      }
    },
    '&__header-receiver-wrapper': {
      height: 90,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      '&__title': {
        display: "flex",
        alignItems: "center",
        marginLeft: 24,
        '& h2': {
          marginLeft: 10,
          fontFamily: FONTS.modalTitleFont,
          letterSpacing: "1px"
        }
      },
      '&__right': {
        width: 115,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      '&__receiver-details': {
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: `${theme.palette.customBackground.light}de`,
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
        borderTopRightRadius: 24,
        padding: "0 20px",
        '&__left': {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        '&__name': {
          color: theme.palette.customColor.main,
          fontSize: 18,
          fontWeight: 600,
          fontFamily: FONTS.primaryFont,
          marginLeft: 15
        },
        '&__avatar': {
          width: 50,
          height: 50,
          [theme.breakpoints.down('xs')]: {
            width: 28,
            height: 28,
          }
        },
        '&__profile': {
          textDecoration: "none",
        }
      }
    },
    '&__chat-box-field-btn-wrapper':{
      width: "70%",
      minHeight: "770px"
    },
    '&__chat-wrapper': {
      height: "70%",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column-reverse",
      marginBottom: "15px",
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
    '&__text-field-btn-wrapper': {
      margin: "20px 20px 20px 10px",
      // Override TextField
      '& label.Mui-focused': {
        color: theme.palette.customBorder.customInputBorder
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.customBorder.customInputBorder
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: theme.palette.customBorder.customInputBorder
      },
      '& .MuiOutlinedInput-multiline': {
        padding: 0
      },
      '& .MuiOutlinedInput-inputMultiline': {
        padding: 12
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.customBorder.customInputBorder,
        }
      },
    },
    '&__send-btn-wrapper':{
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "10px",
      '&__icon': {
        fontSize: 16,
        marginLeft: 5
      }
    },
    '& h1': {
      color: theme.palette.customColor.main,
      [theme.breakpoints.down('xs')]: {
        fontSize: 18
      }
    }

  })
});

export function MessagesStyle(theme) {
  return useStyles(theme);
}
