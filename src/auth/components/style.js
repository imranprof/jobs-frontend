import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  authWrapper: theme => ({
    display: "flex",
    justifyContent: "space-between",
    '&__name': {
      width: "48%"
    },
  })
});

export function AuthStyle(theme) {
  return useStyles(theme);
}
