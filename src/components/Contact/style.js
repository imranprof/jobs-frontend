import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../styles/fonts";

const useStyles = makeStyles({
  contactWrapper: theme => ({
    justifyContent: "space-between",
    marginTop: 20,
    '&__contact-info': {
      background: theme.palette.customBackground.gradiant.light,
      width: "100%",
      height: "100%",
      borderRadius: 20,
      boxShadow: theme.palette.customShadow.default,
      padding: 30,
      '&__image-wrapper': {
        width: "100%",
        height: 280,
        borderRadius: 10,
        overflow: "hidden",
        [theme.breakpoints.down('xs')]: {
          height: 200
        }
      },
      '&__image': {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        transition: "all 0.4s ease",
      },
      '&:hover &__image': {
        transform: "scale(1.1)"
      },
      '&__title-area': {
        marginBottom: 15,
        '&__name': {
          color: theme.palette.customColor.light,
          fontFamily: FONTS.primaryFont,
          fontSize: 29,
          lineHeight: "44px",
          marginBottom: 9,
        },
        '&__designation': {
          color: theme.palette.customColor.dark,
          fontFamily: FONTS.secondaryFont,
          fontSize: 18,
          lineHeight: 1.5,
          marginTop: 0
        },
        [theme.breakpoints.down('xs')]: {
          '&__name': {
            fontSize: 24,
            lineHeight: "30px"
          },
          '&__designation': {
            fontSize: 16
          }
        }
      },
      '&__description-area': {
        marginBottom: 38,
      },
      '&__description': {
        fontSize: 18,
        fontWeight: 400,
        color: theme.palette.customColor.dark,
        fontFamily: FONTS.secondaryFont,
        lineHeight: "30px",
        display: "inline-block",
        margin: "0 0 20px 0",
        [theme.breakpoints.down('xs')]: {
          fontSize: 16,
          lineHeight: "24px"
        }
      },
      '&__phone, &__email': {
        fontSize: 18,
        fontWeight: 400,
        color: theme.palette.customColor.dark,
        fontFamily: FONTS.secondaryFont,
        lineHeight: "30px",
        display: "block",
        margin: 0,
        '& a': {
          color: theme.palette.customColor.main,
          textDecoration: "none",
          display: "inline-block",
          backgroundImage: theme.palette.customBackground.gradiant.highContrast,
          backgroundPosition: "0 100%",
          backgroundSize: "0% 1px",
          backgroundRepeat: "no-repeat",
          transition: "background-size 0.4s, background-position 0.4s, color 0.4s, ease 0s",
          '&:hover': {
            color: theme.palette.customColor.highContrast,
            backgroundPosition: "0 100%",
            backgroundSize: "100% 1px"
          }
        },
      },
      [theme.breakpoints.down('xs')]: {
        padding: 24,
        '&__phone, &__email': {
          fontSize: 16,
          lineHeight: "26px"
        }
      }
    },
    '&__contact-form': {
      background: theme.palette.customBackground.gradiant.light,
      width: "100%",
      height: "100%",
      borderRadius: 20,
      boxShadow: theme.palette.customShadow.default,
      padding: 30,
      marginLeft: 10,
      '&__input-wrapper': {
        display: "flex",
        flexDirection: "column"
      },
      '&__label': {
        display: "block",
        color: theme.palette.customColor.main,
        fontSize: 12,
        fontWeight: 500,
        fontFamily: FONTS.primaryFont,
        letterSpacing: "1px",
        textTransform: "uppercase",
        marginBottom: 14,
        textAlign: "left",
      },
      '&__input': {
        backgroundColor: theme.palette.customBackground.dark,
        color: theme.palette.customColor.main,
        boxShadow: theme.palette.customShadow.dark,
        height: 55,
        fontSize: 14,
        fontFamily: FONTS.primaryFont,
        letterSpacing: "1px",
        transition: "all 0.4s",
        border: "2px solid #191b1e",
        borderRadius: 6,
        padding: "0 15px",
        '&:focus': {
          backgroundColor: theme.palette.customBackground.dark,
          borderColor: theme.palette.customColor.highContrast,
          boxShadow: "none",
          outline: "none"
        },
        '&.message-field': {
          minHeight: 235,
          paddingTop: 15
        },
        [theme.breakpoints.down('xs')]: {
          height: 50,
          '&.message-field': {
            minHeight: 180
          }
        }
      },
      '&__button-wrapper': {
        paddingTop: "0 !important",
        transition: "transform .4s ease",
        '&:hover': {
          transform: "translateY(-5px)",
          color: "white !important"
        },
      },
      '&__button-link': {
        background: theme.palette.customBackground.gradiant.light,
        textDecoration: "none !important",
      },
      [theme.breakpoints.down('xs')]: {
        padding: 24
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginTop: 15,
      },
    },
    '&__send-message-btn': {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      textTransform: "uppercase",
      background: theme.palette.customBackground.gradiant.light,
      boxShadow: theme.palette.customShadow.main,
      width: "100%",
      height: 60,
      marginRight: 25,
      borderRadius: 6,
      color: theme.palette.customColor.highContrast,
      zIndex: 1,
      '&::before': {
        position: "absolute",
        content: '""',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        transition: "opacity 0.5s ease-in-out",
        opacity: 0,
        background: theme.palette.customBackground.gradiant.dark,
      },
      '&:hover::before': {
        opacity: 1
      },
      '&__text': {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: FONTS.secondaryFont,
        marginRight: 10
      },
      '&__icon': {
        fontSize: 20
      }
    }
  })
});

export function ContactStyle(theme) {
  return useStyles(theme);
}
