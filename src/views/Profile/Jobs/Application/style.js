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
          border: `1px solid ${theme.palette.customColor.highContrast}`
        },
        '&-shortlisted': {
          color: theme.palette.customColor.highContrast,
        },
        '&-hire': {
          color: theme.palette.customColor.socialLinkHover,
          backgroundColor: theme.palette.customBackground.gradiant.highContrast,
          marginLeft: 20
        },
        '&__icon': {
          color: theme.palette.customColor.highContrast,
          fontSize: 14,
          marginRight: 5
        }
      }
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
          margin: "0 0 4px 0"
        },
        '& span': {
          fontSize: 13
        }
      }
    },
    '&__cover-letter': {
      fontSize: 15,
      fontFamily: FONTS.secondaryFont,
      whiteSpace: "pre-wrap"
    }
  }),
})

export function JobApplicationStyle(theme) {
  return useStyles(theme);
}
