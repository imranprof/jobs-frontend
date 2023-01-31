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
      [theme.breakpoints.down('sm')]: {
        width: 34,
        height: 34,
      },
      [theme.breakpoints.down('xs')]: {
        width: 30,
        height: 30,
      }
    },
    '&__parent-child-message-wrapper': {
      display: "flex",
      width: "100%",
      maxHeight: 850,
      [theme.breakpoints.down('xs')]: {
        height: 960,
        minHeight: 0,
        flexDirection: "column"
      }
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
        width: "96%",
        height: 170,
        marginBottom: 15
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
        '& i': {
          fontSize: 30
        },
        '& h2': {
          marginLeft: 10,
          fontFamily: FONTS.modalTitleFont,
          letterSpacing: "1px",
        },
        [theme.breakpoints.down('sm')]: {
          '& i': {
            fontSize: 24
          },
          '& h2': {
            fontSize: 18
          }
        },
      },
      '&__right': {
        width: 115,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
          width: 100,
          '& i': {
            fontSize: 26
          }
        },
        [theme.breakpoints.down('xs')]: {
          width: 90,
          '& i': {
            fontSize: 22
          }
        }
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
          color: "inherit",
          textDecoration: "none",
        },
        [theme.breakpoints.down('sm')]: {
          '&__name': {
            fontSize: 16
          },
          '&__avatar': {
            width: 36,
            height: 36,
          }
        },
        [theme.breakpoints.down('xs')]: {
          height: 65,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          padding: "0 10px",
          '&__name': {
            fontSize: 14,
            marginLeft: 10
          },
          '&__profile': {
            fontSize: 11
          }
        },
      },
      [theme.breakpoints.down('sm')]: {
        height: 75
      }
    },
    '&__chat-box-field-btn-wrapper':{
      width: "70%",
      minHeight: 770,
      [theme.breakpoints.down('xs')]: {
        width: "100%",
        height: "80%",
        minHeight: 0
      }
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
      },
      [theme.breakpoints.down('xs')]: {
        height: "68%"
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
      [theme.breakpoints.down('xs')]: {
        margin: "15px 20px 20px 10px",
      }
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
