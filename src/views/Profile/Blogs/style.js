import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    blogsWrapper: theme => ({
        justifyContent: "space-around",
        '&__remove-button': {
            display : "flex",
            justifyContent: "flex-end"
        },
        '&__add-Button': {
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px"
        }
    })
});

export function BlogsStyle(theme) {
    return useStyles(theme);
}
