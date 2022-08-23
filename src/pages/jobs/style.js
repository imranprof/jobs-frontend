import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  jobsWrapper: theme => ({
    marginLeft: 30,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    },
  })
});

export function JobsStyle(theme) {
  return useStyles(theme);
}
