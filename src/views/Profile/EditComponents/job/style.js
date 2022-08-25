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
      '&__selectDropdown': {
        color: COLORS.black,
      }
    }
  }),
})

export function JobEditStyle(theme) {
  return useStyles(theme);
}
