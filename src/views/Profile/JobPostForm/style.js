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
    }
  }),
})

export function JobPostFormStyle(theme) {
  return useStyles(theme);
}
