import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  portfolioWrapper: theme => ({
    justifyContent: "space-around",
    '&__addButton-container': {
      display: "flex",
      justifyContent: "center",
      marginBottom: 20
    }
  })
});

export function PortfolioStyle(theme) {
  return useStyles(theme);
}