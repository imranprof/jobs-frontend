import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
  layoutWrapper: theme => ({
    '&__container': {
      minHeight: "62vh"
    }
  })
});

export function LayoutStyle(theme) {
  return useStyles(theme);
}
