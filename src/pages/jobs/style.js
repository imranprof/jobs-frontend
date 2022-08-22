import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  jobsWrapper: theme => ({
    marginLeft: 30
  })
});

export function JobsStyle(theme) {
  return useStyles(theme);
}
