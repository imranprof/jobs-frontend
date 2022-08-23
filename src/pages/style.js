import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  rootWrapper: theme => ({
    '&__home': {
      width: "100%",
      height: "auto",
    }
  })
});

export function RootStyle(theme) {
  return useStyles(theme);
}
