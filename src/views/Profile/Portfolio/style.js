import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    portfolioWrapper: theme => ({
        justifyContent: "space-around",
        '&__project': {
            marginTop: 30,
        },
        '&__removeButton-Container': {
            display: "flex",
            flexDirection: "row-reverse",
        },
    })
});

export function PortfolioStyle(theme) {
    return useStyles(theme);
}
