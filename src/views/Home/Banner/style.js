import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../styles/fonts";

export const useStyles = makeStyles({
  bannerWrapper: theme => ({
    width: "100%",
    height: 660,
    display: "flex",
    alignItems: "center",
    marginBottom: 50,
    '&__left': {
      width: "85%",
      '&__headline': {
        fontSize: 56,
        fontFamily: FONTS.secondaryFont,
        fontWeight: 600,
        letterSpacing: "1px",
        margin: 0,
        '& span': {
          color: theme.palette.customColor.highContrast
        },
        '&-sub': {
          color: theme.palette.customColor.main,
          fontSize: 18,
          fontFamily: FONTS.secondaryFont,
          fontWeight: 500,
          letterSpacing: "1px",
          margin: "10px 70px 10px 0",
          lineHeight: "30px"
        },
        [theme.breakpoints.down('lg')]: {
          fontSize: 42,
          '&-sub': {
            fontSize: 16
          }
        },
        [theme.breakpoints.down('xs')]: {
          '&-sub': {
            margin: "10px 10px 10px 0"
          }
        }
      },
      '&__buttonWrapper': {
        display: "flex",
        margin: "50px 0 30px 0",
        '&-btn': {
          backgroundColor: theme.palette.customColor.highContrast,
          color: "#fff",
          marginRight: 20,
        }
      },
    },
    '&__right': {
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
    },
    [theme.breakpoints.down('lg')]: {
      height: 580,
      '&__left': {
        width: "100%",
        marginTop: 50
      }
    },
    [theme.breakpoints.down('md')]: {
      height: "0%",
      display: "flex",
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.down('sm')]: {
      '&__left': {
        marginTop: 0
      }
    },
  })
});

export function BannerStyle(theme) {
  return useStyles(theme);
}
