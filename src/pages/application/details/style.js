import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  detailsWrapper: theme => ({
    background: theme.palette.customBackground.gradiant.light,
    boxShadow: theme.palette.customShadow.main,
    padding: 20
  }),
})

export function DetailsStyle(theme) {
  return useStyles(theme);
}
