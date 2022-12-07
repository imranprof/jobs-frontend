import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  linkedinPageWrapper: theme => ({
    maxWidth: 215,
    cursor: 'pointer',
    height: 32,
    borderRadius: 6,
    boxShadow: theme.palette.customShadow.paperCardShadow

  })
});

export function LinkedinPageStyle(theme) {
  return useStyles(theme);
}
