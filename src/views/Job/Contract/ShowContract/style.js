import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../../styles/fonts";
import COLORS from "../../../../../styles/colors";

const useStyles = makeStyles({
  showContractWrapper: theme => ({
    '&__header-wrapper': {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down('xs')]: {
        height: 100,
        flexDirection: "column"
      },
    },
    '&__header': {
      width: 165,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    '&__avatar': {
      width: 40,
      height: 40,
      border: "1px solid"
    },
    '&__name': {
      fontSize: 16,
      fontFamily: FONTS.modalTitleFont,
      margin: 0
    },
    '&__contract-end-btn': {
      backgroundColor: theme.palette.customBackground.buttonBg,
      color: theme.palette.customColor.jobPostBtn,
      marginLeft: 20,
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.palette.customBackground.buttonHoverBg,
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: 150,
        marginLeft: 0
      },
    },
    '&__title': {
      fontSize: 20,
      fontFamily: FONTS.modalTitleFont,
      margin: "30px 0 20px 0",
      [theme.breakpoints.down('xs')]: {
        fontSize: 16
      },
    },
    '&__contracts-tabs-wrapper': {
      display: "flex",
      width: "100%",
    },
    '&__title-tabs-wrapper': {
      margin: "0px 40px",
      [theme.breakpoints.down('xs')]: {
        margin: "0px 20px"
      },
      '&__title': {
        marginBottom: 5,
        fontSize: 14,
        fontFamily: FONTS.modalTitleFont,
        textAlign: "center",
        letterSpacing: "1px",
      },
      '&__selected-title': {
        marginBottom: 5,
        fontSize: 14,
        fontFamily: FONTS.modalTitleFont,
        textAlign: "center",
        letterSpacing: "1px",
        color: theme.palette.customColor.jobType,
      },
      '&__select-line': {
        border: `1px solid ${theme.palette.customColor.jobType}`,
        borderRadius: 5,
        marginBottom: 0,
        width: 100
      },
      '&__title-wrapper': {
        cursor: "pointer"
      },
      '&__mui-divider': {
        marginBottom: 30
      },
      '&__summary': {
        width: "100%",
        marginBottom: 50,
        '&-title': {
          fontSize: 18,
          fontFamily: FONTS.modalTitleFont,
          marginBottom: 30,
          [theme.breakpoints.down('xs')]: {
            marginBottom: 0,
          },
        },
        '&-info': {
          fontSize: 15,
          fontFamily: FONTS.contentFont,
          '& span': {
            color: theme.palette.customColor.main,
          }
        }
      },
      '&__description': {
        width: "100%",
        '&-title': {
          fontSize: 18,
          fontFamily: FONTS.modalTitleFont,
          marginBottom: 30,
          [theme.breakpoints.down('xs')]: {
            marginBottom: 0,
          },
        },
        '&-text': {
          fontFamily: FONTS.jobDescriptionFont,
          marginBottom: 30
        }
      },
      '&__links': {
        width: "100%",
        '&-item': {
          fontSize: 15,
        }
      },
      '&__feedback': {
        width: "100%",
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
        '&-wrapper': {
          marginBottom: 40
        },
        '&-title': {
          color: theme.palette.customColor.main,
          fontWeight: 500,
          '&:first-letter': {
            textTransform: "capitalize"
          },
          [theme.breakpoints.down('xs')]: {
            fontSize: 16
          },
        },
        '&-subtitle': {
          color: theme.palette.customColor.main,
          fontFamily: FONTS.modalTitleFont,
          fontSize: 15
        },
        '&-rating': {
          width: "35%",
          display: "flex",
          flexDirection: "column",
          padding: 20,
          '&__score': {
            fontSize: 16,
            fontFamily: FONTS.modalTitleFont,
            marginTop: 20
          },
          [theme.breakpoints.down('md')]: {
            width: "45%"
          },
          [theme.breakpoints.down('sm')]: {
            width: "80%"
          },
          [theme.breakpoints.down('xs')]: {
            width: "90%",
            '& .style-module_tooltip__tKc3i': {
              marginLeft: "0px !important",
              marginTop: 10
            },
            '& .style-module_simpleStarRating__nWUxf': {
              display: "block"
            }
          },
        },
        '&__text': {
          fontFamily: FONTS.jobDescriptionFont
        },
        '&-message': {
          marginTop: 50,
          '&__title': {
            color: theme.palette.customColor.main,
            fontFamily: FONTS.modalTitleFont,
            '&:first-letter': {
              textTransform: "capitalize"
            }
          },
          '&__input': {
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between"
          },
          '&__input-length': {
            display: "block",
            color: theme.palette.customColor.main,
            fontFamily: FONTS.modalTitleFont,
            textAlign: "right",
            marginTop: 10
          }
        },
        '&__submit-btn': {
          backgroundColor: theme.palette.customBackground.buttonBg,
          color: theme.palette.customColor.jobPostBtn,
          textTransform: 'capitalize',
          marginTop: 20,
          '&:hover': {
            backgroundColor: theme.palette.customBackground.buttonHoverBg,
          }
        }
      },
      '&__timesheet-wrapper': {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        '&__table': {
          minWidth: 650,
          '& .MuiButton-label': {
            textTransform: "capitalize"
          },
          '&-actions': {
            width: 50,
            display: "flex",
            justifyContent: "space-between",
            '&__edit, &__delete': {
              fontSize: 16,
              cursor: "pointer"
            },
            '&__edit': {
              color: COLORS.warning
            },
            '&__delete': {
              color: COLORS.danger
            }
          }
        },
        '&__hours': {
          fontFamily: FONTS.contentFont
        }
      },
      '&__timesheet-title': {
        color: theme.palette.customColor.main,
        fontFamily: FONTS.modalTitleFont,
        fontSize: 18
      },
      '&__create-record': {
        color: theme.palette.customColor.main,
        fontFamily: FONTS.modalTitleFont,
      },
      '&__picker': {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        '&-flex': {
          display: "flex",
          width: 310,
          justifyContent: "space-between",
        },
        '&-wrapper': {
          width: 150
        },
        '& .MuiFormControl-marginNormal': {
          margin: 0
        },
        [theme.breakpoints.down('sm')]: {
          flexDirection: "column",
          alignItems: "flex-start",
          '&-flex': {
            width: 350,
            marginBottom: 20
          }
        },
        [theme.breakpoints.down('xs')]: {
          '&-wrapper': {
            marginRight: 20
          },
          '&-flex': {
            width: "100%",
            justifyContent: "flex-start"
          }
        },
      }
    }
  }),
})

export function ShowContractStyle(theme) {
  return useStyles(theme);
}
