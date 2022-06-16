import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  errorMessagesWrapper: theme => ({
    color: theme.palette.customColor.dangerColor,
    marginTop: 5
  })
});

export function ErrorMessagesStyle(theme) {
  return useStyles(theme);
}
