import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  jobApplicationWrapper: theme => ({
    '&__header-wrapper': {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      '&__left': {
        width: 250,
        display: "flex",
        justifyContent: "space-between",
      },
      '&__avatar': {
        width: 70,
        height: 70,
        border: "2px solid"
      },
      '&__name': {
        color: theme.palette.customColor.main,
        fontSize: 24,
        fontFamily: FONTS.primaryFont,
        textTransform: "capitalize",
        margin: 0,
      },
      '&__email': {
        color: theme.palette.customColor.main,
        fontFamily: FONTS.primaryFont,
      },
      '&__link-wrapper': {
        margin: "20px 0"
      },
      '&__profile-link': {
        color: theme.palette.customColor.highContrast,
        fontSize: 15,
        fontFamily: FONTS.primaryFont,
        fontWeight: 600,
        textDecoration: "none",
      },
      '&__buttons': {
        height: "fit-content",
        display: "flex",
        '& .MuiButton-root': {
          textTransform: "capitalize",
          letterSpacing: "1px"
        },
        '& .MuiButton-outlined': {
          padding: "4px 15px",
          border: `1px solid ${theme.palette.customColor.highContrast}`
        },
        '&-shortlisted': {
          color: theme.palette.customColor.highContrast,
        },
        '&-hire': {
          marginLeft: 20
        },
        '&__icon': {
          color: theme.palette.customColor.highContrast,
          fontSize: 14,
          marginRight: 5
        },
        [theme.breakpoints.down('sm')]: {
          height: "auto",
          flexDirection: "column",
          alignItems: "end",
          '&-shortlisted': {
            width: 148,
            marginBottom: 12
          },
        },
        [theme.breakpoints.down('xs')]: {
          alignItems: "start",
          '&-hire': {
            marginLeft: 0
          }
        },
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: "column",
        alignItems: "start",
        '&__left': {
          width: 230
        },
        '&__avatar': {
          width: 55,
          height: 55
        },
        '&__personal-info': {
          marginLeft: 10
        },
        '&__name': {
          fontSize: 20
        },
        '&__email': {
          wordBreak: "break-word"
        }
      },
    },
    '&__wrapper': {
      display: "flex",
      justifyContent: "space-between",
      '& h2': {
        margin: 0
      },
      '&-bid': {
        fontFamily: FONTS.secondaryFont,
        '&-rate': {
          fontSize: 20,
          margin: "0 0 4px 0",
          [theme.breakpoints.down('xs')]: {
            fontSize: 18,
            margin: 0
          }
        },
        '& span': {
          fontSize: 13
        }
      },
      [theme.breakpoints.down('xs')]: {
        '& h2': {
          fontSize: 18
        },
      }
    },
    '&__cover-letter': {
      fontSize: 15,
      fontFamily: FONTS.secondaryFont,
      whiteSpace: "pre-wrap",
      [theme.breakpoints.down('xs')]: {
        fontSize: 14
      }
    }
  }),
})

export function JobApplicationStyle(theme) {
  return useStyles(theme);
}
