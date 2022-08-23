import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../styles/fonts";

export const useStyles = makeStyles({
  headerWrapper: theme => ({
    backgroundColor: "transparent",
    padding: "28px 50px",
    marginBottom: 50,
    boxShadow: theme.palette.customShadow.light,
    position: "static",
    transition: 'backdrop-filter 0.3s ease-in-out',
    backdropFilter: 'blur(15px) opacity(0)',
    '&.isSticky': {
      position: "fixed",
      width: "100%",
      backgroundColor: `${theme.palette.customBackground.light}de`,
      boxShadow: theme.palette.customShadow.main,
      backdropFilter: "blur(15px) opacity(1)",
      padding: "14px 50px",
    },
    '&__toolbar': {
      width: '100%',
      justifyContent: 'space-between',
      '&__navLeft': {
        display: "flex",
        alignItems: "center",
      },
      '&__right': {
        justifySelf: "flex-end",
        flexGrow: .2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      // Logo
      '&__logo': {
        textDecoration: "none",
        color: theme.palette.customColor.light,
        '& h1': {
          fontSize: 22
        }
      },
    },

    // Profile Header Styles
    '&__profile': {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      '&__pic': {
        backgroundColor: theme.palette.customColor.main,
        width: 65,
        height: 65,
        borderRadius: '50%',
        border: `3px solid ${theme.palette.customColor.dark}`,
        marginRight: 10,
      },
      '&__name': {
        fontSize: 18,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: theme.palette.customColor.main,
        fontFamily: FONTS.primaryFont,
        '&--drawer': {
          color: theme.palette.customColor.dark,
          width: 285,
          fontSize: 17,
          margin: '20px 0',
          lineHeight: '32px'
        }
      },
      // ========= Breakpoints =========
      [theme.breakpoints.down('md')]: {
        '&__pic': {
          width: 60,
          height: 60,
        },
        '&__name': {
          fontSize: 17,
        }
      },
      [theme.breakpoints.down('sm')]: {
        '&__pic': {
          width: 55,
          height: 55,
        },
        '&__name': {
          fontSize: 15,
        }
      },
      [theme.breakpoints.down('xs')]: {
        '&__pic': {
          width: 50.,
          height: 50,
          border: `2px solid ${theme.palette.customColor.dark}`,
        },
        '&__name': {
          fontSize: 14,
        }
      }
    },
    '&__nav': {
      '&__theme-switch': {
        marginLeft: 40,
        marginTop: "-6px"
      },
      '& a': {
        fontFamily: FONTS.primaryFont,
        fontWeight: 400,
        fontSize: 13,
        color: theme.palette.customColor.main,
        textDecoration: 'none',
        textTransform: 'uppercase',
        cursor: "pointer",
        opacity: .8,
        transition: "all .4s ease 0s",
        '&:hover': {
          opacity: 1,
          color: theme.palette.customColor.light,
        },
      },
      '&__navShare': {
        display: "flex",
      },
      '&__navItem': {
        width: "100%"
      },
      '&__share': {
        position: "relative",
        textAlign: "center",
        textTransform: "uppercase",
        background: theme.palette.customBackground.gradiant.light,
        boxShadow: theme.palette.customShadow.paperCardShadow,
        width: 95,
        height: 40,
        border: "none",
        borderRadius: 5,
        transition: "all .5s ease",
        color: theme.palette.customColor.highContrast,
        '&:hover': {
          opacity: 1,
          borderRadius: 6,
          background: theme.palette.customColor.shareBtn,
          color: theme.palette.customColor.sendMessageBtn,
          cursor: "pointer"
        },
        '&__popUp': {
          zIndex: 999999999
        },
        '&__shareBar': {
          width: 150,
          display: "flex",
          justifyContent: "space-between",
          padding: 9,
          background: theme.palette.customBackground.shareBar,
          borderRadius: 7,
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
              transform: "rotate(45deg)",
              left: "calc(50% - 6px)"
            }
          },
          '&__icon': {
            borderRadius: 10,
            height: 30,
            width: 30
          },
        }
      },
      '& .active': {
        opacity: 1,
        color: theme.palette.customColor.navLinkActive,
      },
      '&--default': {
        display: 'inline',
        padding: '0 15px',
      },
      '&--drawer': {
        width: "auto",
        paddingLeft: 0,
        margin: "8px 0",
        '& a': {
          opacity: .8,
          fontWeight: 500,
          fontSize: 14,
        }
      }
    },
    '&__side-bar': {
      background: theme.palette.customBackground.sideBar,
      padding: '25px 25px 50px 25px',
      height: "100vh",
      '&__icons': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      '&__links': {
        height: 420,
        marginTop: 15,
      },
      [theme.breakpoints.down('md')]: {
        width: 300,
        padding: "25px 25px 50px 25px",
        overflowX: "hidden"
      },
      '&__share-bar': {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "transparent",
        width: 190,
        height: 60,
        '&__title': {
          color: theme.palette.customColor.main,
          fontSize: "14px",
          fontWeight: 300,
          marginBottom: "15px",
          marginTop: "50px",
          display: "inline-block",
          textTransform: "uppercase",

        },
        '&__icon': {
          borderRadius: 5,
          height: 45,
          width: 45,
          boxShadow: theme.palette.customShadow.main
        }
      }
    },
    '&__menu': {
      color: theme.palette.customColor.highContrast,
      padding: 0,
      '&__icon': {
        fontSize: 40
      },
      // ========= Breakpoints =========
      [theme.breakpoints.down('sm')]: {
        '&__icon': {
          fontSize: 36
        },
      },
      [theme.breakpoints.down('xs')]: {
        '&__icon': {
          fontSize: 32
        },
      }
    },
    '&__close-icon': {
      color: theme.palette.customColor.highContrast,
      width: 45,
      height: 45,
    },

    // Profiles Header Styles
    '&__profiles__side-bar': {
      background: theme.palette.customBackground.sideBar,
      padding: '10px 25px 20px 25px',
      height: "100vh",
      '&__wrapper': {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 16
      },
      '&__links': {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "30px 0",
        '&-link': {
          margin: "5px 0",
          padding: 10
        }
      },
      '&__top': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
      },
      '&__bottom': {
        display: "flex",
        justifyContent: "center",
        '& a': {
          width: "80%",
          position: "absolute",
          bottom: 20
        }
      },
      [theme.breakpoints.down('md')]: {
        width: 300,
        padding: "10px 25px 20px 25px"
      }
    },
    '&__profiles__close-icon': {
      color: theme.palette.customColor.highContrast,
      width: 35,
      height: 35,
    },
    '&__button': {
      fontFamily: FONTS.secondaryFont,
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: "1px",
      color: theme.palette.customColor.main,
      textDecoration: 'none',
      cursor: "pointer",
      opacity: .8,
      transition: "all .4s ease 0s",
      '&:hover': {
        opacity: 1,
        color: theme.palette.customColor.navLinkActive,
      },
    },
    '&-signup, &-sign-out': {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: FONTS.secondaryFont,
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: "1px",
      textAlign: "center",
      textDecoration: 'none',
      background: theme.palette.customBackground.gradiant.light,
      boxShadow: theme.palette.customShadow.buttonShadow,
      width: 100,
      height: 48,
      border: "none",
      borderRadius: 6,
      color: theme.palette.customColor.highContrast,
      zIndex: 1,
      transition: "all 0.4s ease",
      '&::before': {
        position: "absolute",
        content: '""',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        transition: "opacity 0.4s ease-in-out",
        opacity: 0,
        background: theme.palette.customBackground.gradiant.dark,
        borderRadius: 6
      },
      '&:hover::before': {
        opacity: 1,
        borderRadius: 6,
      },
      '&:hover': {
        color: theme.palette.customColor.sendMessageBtn,
      },
      [theme.breakpoints.down('md')]: {
        width: "100%",
      }
    },
    // ========= Breakpoints =========
    [theme.breakpoints.down('xs')]: {
      '&__toolbar': {
        padding: "0 14px"
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 25px",
      '&.isSticky': {
        padding: '10px 18px',
      },
      '&__toolbar': {
        padding: "0 24px"
      },
    },
    [theme.breakpoints.between('sm', "md")]: {
      padding: "20px 40px",
      '&.isSticky': {
        padding: '12px 32px',
      },
    }
  }),
});

export function HeaderStyle(theme) {
  return useStyles(theme);
}
