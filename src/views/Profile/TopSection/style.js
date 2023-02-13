import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../styles/fonts";
import COLORS from "../../../../styles/colors";

export const useStyles = makeStyles({
  topSectionWrapper: theme => ({
    width: "100%",
    display: "flex",
    flexWrap: "wrap-reverse",
    '&.addMargin': {
      marginTop: 180
    },
    // topSection left side
    '&__left': {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      '&-top': {
        marginBottom: 80,
        '&__headlineRateWrapper': {
          display: "flex",
          justifyContent: "space-between"
        },
        '&__rate-inputWrapper': {
          width: "30%",
          marginLeft: 10,
          '& label.Mui-focused': {
            color: theme.palette.customBorder.customInputBorder
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.customBorder.customInputBorder
          },
          '& .MuiFilledInput-underline:after': {
            borderBottomColor: theme.palette.customBorder.customInputBorder
          },
          '& .MuiOutlinedInput-input': {
            padding: 12
          },
          '& .MuiOutlinedInput-inputMultiline': {
            padding: 0
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.customBorder.customInputBorder,
            }
          },
          [theme.breakpoints.down('xs')]: {
            width: "100%"
          }
        },
        '&__editBtnWrapper': {
          height: "fit-content",
        },
        '&__headline-inputWrapper': {
          width: "85%",
          '& label.Mui-focused': {
            color: theme.palette.customBorder.customInputBorder
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.customBorder.customInputBorder
          },
          '& .MuiFilledInput-underline:after': {
            borderBottomColor: theme.palette.customBorder.customInputBorder
          },
          '& .MuiOutlinedInput-input': {
            padding: 12
          },
          '& .MuiOutlinedInput-inputMultiline': {
            padding: 0
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.customBorder.customInputBorder,
            }
          },
          [theme.breakpoints.down('xs')]: {
            width: "100%"
          }
        },
        '&__headline': {
          width: "85%",
          fontSize: 14,
          fontFamily: FONTS.primaryFont,
          color: theme.palette.customColor.main,
          letterSpacing: 3,
          textTransform: "uppercase",
          fontWeight: 500,
          display: "block",
          marginBottom: 20,
          wordBreak: "break-word",
          '&-text': {
            marginRight: 14
          },
          // ========= Breakpoints =========
          [theme.breakpoints.down('xs')]: {
            width: "100%",
            fontSize: 14,
            margin: 0,
            letterSpacing: 1
          }
        },
        '&__hourlyRate': {
          width: "30%",
          fontSize: 14,
          fontFamily: FONTS.primaryFont,
          color: theme.palette.customColor.main,
          fontWeight: 500,
          display: "block",
          marginBottom: 20,
          wordBreak: "break-word",
          marginLeft: 10,
          '&-text': {
            marginRight: 14,
            fontWeight: 700,
            fontSize: 18,
            color: theme.palette.customColor.highContrast,
            [theme.breakpoints.down('xs')]: {
              fontSize: 15
            }
          },
          // ========= Breakpoints =========
          [theme.breakpoints.down('xs')]: {
            width: "50%",
            fontSize: 14,
            display: "flex",
            alignItems: "center"
          }
        },
        '&__bio-inputWrapper': {
          width: "85%",
          '& label.Mui-focused': {
            color: theme.palette.customBorder.customInputBorder
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.customBorder.customInputBorder
          },
          '& .MuiFilledInput-underline:after': {
            borderBottomColor: theme.palette.customBorder.customInputBorder
          },
          '& .MuiOutlinedInput-input': {
            padding: 12
          },
          '& .MuiOutlinedInput-inputMultiline': {
            padding: 0
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.customBorder.customInputBorder,
            }
          },
          [theme.breakpoints.down('xs')]: {
            width: "100%"
          }
        },
        '&__title': {
          color: theme.palette.customColor.light,
          fontSize: 60,
          fontWeight: 700,
          fontFamily: FONTS.primaryFont,
          lineHeight: "75px",
          marginTop: 0,
          marginBottom: 22,
          '&__name': {
            color: theme.palette.customColor.highContrast
          },
          '&__expertise': {
            display: "flex",
            alignItems: "center",
            fontSize: 48,
            fontWeight: 700,
            height: 58,
          },
          '&__cursor': {
            borderRight: `2px solid ${theme.palette.customColor.main}`,
            padding: 3,
            height: 50,
            opacity: 0.5
          },
          // ========= Breakpoints =========
          [theme.breakpoints.down('md')]: {
            fontSize: 50,
            '&__expertise': {
              height: 38,
              fontSize: 38
            }
          },
          [theme.breakpoints.down('xs')]: {
            fontSize: 26,
            lineHeight: "35px",
            '&__expertise': {
              fontSize: 20,
              lineHeight: 0,
              marginBottom: 0
            },
            '&__cursor': {
              height: 35,
            },
          }
        },
        '&__greetings-expertise': {
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          paddingTop: 12,
          [theme.breakpoints.down('xs')]: {
            width: "100%"
          }
        },
        '&__bio-wrapper': {
          display: "flex",
          paddingTop: 12,
          width: "90%",
          [theme.breakpoints.down('xs')]: {
            width: "100%"
          }
        },
        '&__bio-text': {
          fontSize: 16,
          fontFamily: FONTS.secondaryFont,
          lineHeight: "30px",
          color: theme.palette.customColor.main,
          margin: "0 10px 0 0",
          opacity: 0.9,
          // ========= Breakpoints =========
          [theme.breakpoints.down('sm')]: {
            fontSize: 14,
            paddingRight: 0
          }
        },
      },
      '&-bottom': {
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
        // ========= Breakpoints =========
        [theme.breakpoints.down('sm')]: {
          width: "100%",
        },
        [theme.breakpoints.down('xs')]: {
          width: "90%",
          flexDirection: "column",
          '& > div:nth-of-type(1)': {
            marginBottom: 30
          }
        }
      },
      // ========= Breakpoints =========
      [theme.breakpoints.down('md')]: {
        justifyContent: "end",
        '&-top': {
          marginBottom: 42,
        },
      }
    },

    // topSection right side
    '&__profilePhotoWrapper': {
      display: "flex",
      flexDirection: "row-reverse",
      '&__editBtn': {
        height: "fit-content",
        marginLeft: 8
      }
    },
    '&__thumbnail': {
      position: "relative",
      zIndex: 2,
      '&--img': {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 6
      },
      '&::before': {
        content: '""',
        position: "absolute",
        zIndex: -1,
        width: "100%",
        height: "calc(100% - 130px)",
        left: "50%",
        bottom: 0,
        transform: "translateX(-50%)",
        background: theme.palette.customBackground.gradiant.light,
        boxShadow: theme.palette.customShadow.main,
        borderRadius: 6
      },
      // ========= Breakpoints =========
      [theme.breakpoints.down('sm')]: {
        marginBottom: 50
      }
    },
    '&__backto-top': {
      display: "none",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      bottom: 50,
      right: 30,
      cursor: "pointer",
      zIndex: 999,
      width: 50,
      height: 50,
      lineHeight: 46,
      borderRadius: "50%",
      backgroundColor: theme.palette.customBackground.light,
      textAlign: "center",
      boxShadow: theme.palette.customShadow.backToTop,
      transition: "all 0.4s",
      '&:hover': {
        backgroundColor: theme.palette.customBackground.dark,
      },
      '& i': {
        display: "block",
        color: theme.palette.customColor.backToTop,
        fontSize: 24,
      }
    },
    [theme.breakpoints.down('xs')]: {
      padding: "0px 16px"
    },
    '&__role-confirmation':{
      padding: '10px 10px 10px 20px',
      background: theme.palette.customBackground.gradiant.dark,
      marginBottom: 30,
      borderRadius: 10,
      '&__heading':{
        color: theme.palette.customColor.main,
        fontFamily: FONTS.contentFont
      },
      '&__yes-btn':{
        marginRight: 10,
        color: COLORS.success
      },
      '&__no-btn':{
        color: COLORS.danger
      },
      '&__alert-text':{
        color: COLORS.danger,
        fontFamily: FONTS.contentFont
      }
    }
  })
});

export function TopSectionStyle(theme) {
  return useStyles(theme);
}
