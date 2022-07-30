import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  editModalDivider: theme => ({
    background: theme.palette.customDivider.primary,
  })
});

export function EditModalDividerStyle(theme) {
  return useStyles(theme);
}
