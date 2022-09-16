import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  jobShowWrapper: theme => ({
    display: 'block',
    '&__divider': {
      margin: "30px 0"
    },
    '&__title': {
      color: theme.palette.customColor.highContrast,
      margin: "0 0 5px 0"
    },
    '&__pay-type': {
      fontSize: 12,
      fontWeight: 600,
      color: theme.palette.customColor.dark,
      letterSpacing: "1px",
      transition: "all 0.3s ease-in-out",
      '&-icon': {
        fontSize: 16,
        color: theme.palette.customColor.dark,
        marginRight: 5
      },
      '&__text': {
        fontSize: 11,
        fontWeight: 600,
        color: theme.palette.customColor.dark,
        letterSpacing: "1px",
        transition: "all 0.3s ease-in-out",
        marginLeft: 22
      }
    },
    '&__budgetWrapper': {
      display: "flex",
      alignItems: "center"
    },
    '&__budget': {
      fontSize: 14,
      fontWeight: 600,
      color: theme.palette.customColor.dark,
      letterSpacing: "1px",
      transition: "all 0.3s ease-in-out",
    },
    '&__description': {
      color: theme.palette.customColor.main,
      fontSize: "15px",
      fontFamily: "Helvetica Neue",
      lineHeight: "1.5",
      whiteSpace: "pre-wrap",
    },
    '&__content-header': {
      color: theme.palette.customColor.main,
      margin: "20px 0"
    },
    '&__skills-wrapper': {
      width: "40%",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      overflow: "hidden",
      '&__skill': {
        display: "inline-table",
        width: "auto",
        height: 10,
        background: theme.palette.customBackground.skillBackground,
        padding: "0 5px 2px 5px",
        borderRadius: 5,
        margin: 3,
        fontSize: 11
      },
      [theme.breakpoints.down('xs')]: {
        width: "80%"
      }
    },
    '&__location': {
      color: theme.palette.customColor.main,
      fontFamily: "Helvetica Neue",
      fontSize: 15,
    },
    '&__total-applied': {
      fontSize: 15,
      fontFamily: FONTS.secondaryFont,
      color: theme.palette.customColor.main,
      letterSpacing: "1px",
    },
    '&__button': {
      marginLeft: 10
    },
    '&__btn-icon-wrapper': {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    '&__selected-icon-wrapper': {
      color: "#009432",
    },
    '&__applicant-list': {
      '&__table-header': {
        backgroundColor: theme.palette.customDivider.main,
        '&__title': {
          fontSize: 15,
          fontWeight: 600,
          color: theme.palette.customColor.main
        }
      },
      '&__table-cell': {
        backgroundColor: theme.palette.customBackground.skillBackground,
        padding: 10,
        '& a': {
          color: theme.palette.customColor.highContrast,
          textDecoration: "none"
        },
        '&__checkbox': {
          color: theme.palette.customColor.success,
          paddingLeft: 0,
          '& .MuiSvgIcon-root': {
            color: theme.palette.customColor.success,
          }
        },
        '&__shortlist': {
          width: "25%",
          paddingTop: 0
        }
      },
      '&__name-avatar-wrapper': {
        display: "flex",
        alignItems: "center"
      },
      '&__avatar': {
        border: "2px solid",
        marginRight: "10px"
      },
      '&__name': {
        fontWeight: 600,
        fontSize: 15
      }
    },
    '&__close-button': {
      display: "flex",
      justifyContent: "flex-end"
    },
    '&__tooltip': {
      maxWidth: 800,
      maxHeight: "auto",
      fontSize: 16,
      padding: 20,
      whiteSpace: "pre-wrap",
    }
  }),
})

export function JobShowStyle(theme) {
  return useStyles(theme);
}
