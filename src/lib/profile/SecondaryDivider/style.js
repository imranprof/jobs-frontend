import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  secondaryDivider: theme => ({
    background: theme.palette.customDivider.primary,
  })
});

export function SecondaryDividerStyle(theme) {
  return useStyles(theme);
}
