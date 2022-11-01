import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  contractJobShowWrapper: theme => ({
    background: theme.palette.customBackground.gradiant.light,
    boxShadow: theme.palette.customShadow.main,
    padding: 40,
    marginBottom: 200,
  }),
})

export function ContractJobShowStyle(theme) {
  return useStyles(theme);
}
