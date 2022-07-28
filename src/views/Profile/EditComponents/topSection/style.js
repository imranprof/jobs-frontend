import {makeStyles} from "@material-ui/core/styles";

import COLORS from "../../../../../styles/colors";

const useStyles = makeStyles({
  topSectionEditWrapper: theme => ({
    '&__introWrapper': {
      height: 70,
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
      '&-child': {
        display: "flex",
        alignItems: "center",
      },
      '&__fullName': {
        color: theme.palette.customColor.highContrast,
        fontSize: 16,
        marginLeft: 15,
        fontWeight: 700
      }
    },
    '&__expertisesWrapper': {
      height: "83%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      '&__label': {
        marginBottom: 10
      },
      '&__selectDropdown': {
        color: COLORS.black,
      }
    },
    '&__socialLinks': {
      width: "100%",
      height: 220,
      '&-wrapper': {
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
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
      },
      '&-icon': {
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        marginRight: 10
      },
    },
    '&__skillsWrapper': {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      '&__selectDropdown': {
        color: COLORS.black,
      }
    },
    '&__avatarWrapper': {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "auto",
      margin: "30px auto",
      '&__image': {
        width: 250,
        height: 250,
        background: theme.palette.customColor.avatarBgEdit,
        borderRadius: "50%",
        padding: 8,
        '&__upload': {
          margin: theme.spacing(1),
        },
        '&__input': {
          display: "none"
        }
      }
    }
  }),
})

export function TopSectionEditStyle(theme) {
  return useStyles(theme);
}
