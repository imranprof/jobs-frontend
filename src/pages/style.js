import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  rootWrapper: theme => ({
    '&__home': {
      height: 640,
      display: "flex",
      justifyContent: "center"
    }
  })
});

export function RootStyle(theme) {
  return useStyles(theme);
}
