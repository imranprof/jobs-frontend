import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  resumeEditWrapper: theme => ({
    '&__top-label': {
      margin: "0 0 30px 0"
    },
    '&__content-wrapper': {
      height: 290,
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
      }
    },
  }),
})

export function ResumeEditStyle(theme) {
  return useStyles(theme);
}
