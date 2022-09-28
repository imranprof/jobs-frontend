import {makeStyles} from "@material-ui/core/styles";

import COLORS from "../../../../../styles/colors";
import FONTS from "../../../../../styles/fonts";

const useStyles = makeStyles({
  topSectionEditWrapper: theme => ({
    '&__introWrapper': {
      margin: "20px auto",
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
      '&__selectWrapper': {
        margin: "10px 0 100px 0",
        // =========== override react-select ==========
        '& .css-1s2u09g-control, & .css-1pahdxg-control': {
          backgroundColor: "transparent",
        },
        '& #react-select-2-listbox, & .css-26l3qy-menu': {
          backgroundColor: theme.palette.customBackground.light,
        },
        '& .css-1rhbuit-multiValue, & .css-1n7v3ny-option': {
          backgroundColor: theme.palette.customBackground.skillBackground,
        },
        '& .css-12jo7m5, & .css-1pndypt-Input, & .css-qc6sy-singleValue': {
          color: theme.palette.customColor.light,
        },
        // =========== End override react-select =========
      },
    },
    '&__socialLinks': {
      width: "90%",
      height: "100%",
      margin: "40px 0",
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
