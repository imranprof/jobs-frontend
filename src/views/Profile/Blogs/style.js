import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    blogsWrapper: theme => ({
        justifyContent: "space-around",
        '&__remove-button': {
            display : "flex",
            justifyContent: "flex-end"
        },
        '&__blog-card': {
            marginBottom: "75px"
        }
    })
});

export function BlogsStyle(theme) {
    return useStyles(theme);
}
