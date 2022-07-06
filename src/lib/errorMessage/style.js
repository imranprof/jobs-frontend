import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  errorMessageWrapper: theme => ({
    display: "flex",
    alignItems: "center",
    color: theme.palette.customColor.dangerColor,
    '& > p': {
      marginLeft: 5
    }
  })
});

export function ErrorMessageStyle(theme) {
  return useStyles(theme);
}
