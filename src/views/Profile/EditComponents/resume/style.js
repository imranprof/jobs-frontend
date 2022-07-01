import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  resumeEditWrapper: theme => ({
    '&__top-label': {
      margin: "0 0 30px 0"
    },
    '&__content-wrapper': {
      height: "80%",
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
      '& .MuiSelect-selectMenu': {
        width: 74,
      },
      '&__gap': {
        margin: "18px 0",
      },
      '&__fullDateWrapper': {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      },
      '&__mainDateWrapper': {
        width: "46%"
      },
      '&__dateWrapper': {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: 10
      },
      '&__hyphen': {
        paddingTop: 34
      }
    }
  }),
})

export function ResumeEditStyle(theme) {
  return useStyles(theme);
}
