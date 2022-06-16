import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  errorMessagesWrapper: theme => ({
    display: "flex",
    alignItems: "center",
    color: theme.palette.customColor.dangerColor,
    '& > p': {
      marginLeft: 5
    }
  })
});

export function ErrorMessagesStyle(theme) {
  return useStyles(theme);
}
