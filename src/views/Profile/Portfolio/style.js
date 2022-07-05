import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    portfolioWrapper: theme => ({
        justifyContent: "space-around",
    })
});

export function PortfolioStyle(theme) {
    return useStyles(theme);
}