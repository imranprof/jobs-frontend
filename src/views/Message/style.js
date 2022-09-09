import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  messageWrapper: theme => ({
    background: theme.palette.customBackground.gradiant.light,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  })
});

export function MessageStyle(theme) {
  return useStyles(theme);
}
