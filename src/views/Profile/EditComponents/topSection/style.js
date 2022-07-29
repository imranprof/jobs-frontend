import {makeStyles} from "@material-ui/core/styles";

import COLORS from "../../../../../styles/colors";
import FONTS from "../../../../../styles/fonts";

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
      width: 200,
      height: 200,
      margin: "18px auto",
      '&__message': {
        fontSize: 20,
        textAlign: "center",
        color: theme.palette.customColor.modalTitle,
        fontFamily: FONTS.modalTitleFont,
        letterSpacing: "1px"
      },
      '&__image': {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        background: theme.palette.customColor.avatarBgEdit,
        borderRadius: "50%",
        padding: 3,
      },
    }
  }),
})

export function TopSectionEditStyle(theme) {
  return useStyles(theme);
}
