import {makeStyles} from "@material-ui/core/styles";
import COLORS from "../../../../styles/colors";

const useStyles = makeStyles({
  jobPostFormWrapper: theme => ({
    width: "100%",
    height: "auto",
    '&__contentWrapper': {
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
      '& .MuiTextField-root': {
        marginBottom: 0
      },
      '&__gap': {
        margin: "30px 0"
      },
      '&__selectDropdown': {
        color: COLORS.black,
      }
    },
    '&__button': {
      background: theme.palette.customBackground.gradiant.light,
      color: theme.palette.customColor.highContrast,
      transition: "all .5s ease",
      '&:hover': {
        opacity: 1,
        background: theme.palette.customColor.highContrast,
        color: theme.palette.customColor.light
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
    }
  }),
})

export function JobPostFormStyle(theme) {
  return useStyles(theme);
}
