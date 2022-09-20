import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  talentsSearchWrapper: theme => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  })
});

export function TalentsSearchStyle(theme) {
  return useStyles(theme);
}
