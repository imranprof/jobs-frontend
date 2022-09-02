import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  jobShowWrapper: theme => ({
    display: 'block',
    '&__divider': {
      margin: "30px 0"
    },
    '&__title': {
      color: theme.palette.customColor.highContrast,
      marginTop: 0
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
    '&__button': {
      marginLeft: 10
    },
    '&__selected-icon-wrapper': {
      color: "#009432",
      marginLeft: "60%",
      [theme.breakpoints.down('xs')]: {
        marginLeft: "20%"
      }
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
        '& a': {
          color: theme.palette.customColor.highContrast,
          textDecoration: "none"
        },
        '&__checkbox': {
          color: "#009432",
          '& .MuiSvgIcon-root': {
            color: "#009432"
          }
        }
      },
      '&__name-avatar-wrapper': {
        display: "flex",
        alignItems: "center"
      },
      '&__avatar': {
        border: "3px solid",
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
    }
  }),
})

export function JobShowStyle(theme) {
  return useStyles(theme);
}
