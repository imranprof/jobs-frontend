import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  featuresEditWrapper: theme => ({
    '&__top-label': {
      margin: "0 0 30px 0"
    },
    '&__content-wrapper': {
      height: 300,
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
      }
    },
    '&__content-label': {
      fontSize: 13,
      margin: "15px 0 10px 0"
    },
  }),
})

export function FeaturesEditStyle(theme) {
  return useStyles(theme);
}
