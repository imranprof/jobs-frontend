import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    blogsWrapper: theme => ({
        justifyContent: "space-around",
    })
});

export function BlogsStyle(theme) {
    return useStyles(theme);
}
