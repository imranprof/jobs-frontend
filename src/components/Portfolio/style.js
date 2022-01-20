import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    portfolioWrapper: theme => ({
        display: "flex",
        justifyContent: "space-between",
    })
});

export function PortfolioStyle(theme) {
    return useStyles(theme);
}
