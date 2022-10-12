import {makeStyles} from "@material-ui/core/styles";
import COLORS from "../../../../styles/colors";

const useStyles = makeStyles({
  jobPostFormWrapper: theme => ({
    width: "100%",
    height: "auto",
    '&__contentWrapper': {
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

      '& .MuiTextField-root': {
        marginBottom: 0
      },
      '&__gap': {
        margin: "30px 0"
      },
    },
    '&__button': {
      background: theme.palette.customBackground.gradiant.light,
      color: theme.palette.customColor.highContrast,
      transition: "all .5s ease",
      '&:hover': {
        opacity: 1,
        background: theme.palette.customColor.highContrast,
        color: theme.palette.customColor.socialLinkHover
      }
    },
    '&__rate-wrapper': {
      width: "80%",
      display: "flex"
    },
    '&__job-rate': {
      display: "flex",
      alignItems: "center",
      '&__field': {
        marginRight: 5
      },
      '&__to': {
        margin: "0 30px"
      }
    },
    '&__close-button': {
      display: "flex",
      justifyContent: "flex-end"
    }
  }),
})

export function JobPostFormStyle(theme) {
  return useStyles(theme);
}
