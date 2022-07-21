import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  errorMessageWrapper: theme => ({
    display: "flex",
    alignItems: "center",
    height: 35,
    color: theme.palette.customColor.dangerColor,
    '& .MuiSvgIcon-root': {
      width: 18,
      height: 18
    },
    '& > p': {
      marginLeft: 5
    }
  })
});

export function ErrorMessageStyle(theme) {
  return useStyles(theme);
}