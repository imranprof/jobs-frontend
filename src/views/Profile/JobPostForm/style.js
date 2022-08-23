import {makeStyles} from "@material-ui/core/styles";
import COLORS from "../../../../styles/colors";

const useStyles = makeStyles({
  jobPostFormWrapper: theme => ({
    width: "100%",
    height: "auto",
    '&__contentWrapper': {
      '& .MuiOutlinedInput-multiline': {
        padding: 0
      },
      '& .MuiOutlinedInput-inputMultiline': {
        padding: 12
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
    }
  }),
})

export function JobPostFormStyle(theme) {
  return useStyles(theme);
}
