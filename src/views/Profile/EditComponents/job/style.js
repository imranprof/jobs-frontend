import {makeStyles} from "@material-ui/core/styles";
import COLORS from "../../../../../styles/colors";

const useStyles = makeStyles({
  jobEditWrapper: theme => ({
    '&__content-wrapper': {
      height: "auto",
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
      '&__gap': {
        margin: "30px 0"
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
    }
  }),
})

export function JobEditStyle(theme) {
  return useStyles(theme);
}
