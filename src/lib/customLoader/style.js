import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    loaderWrapper: theme => ({
        width: "100%",
        height: "100%",
        '& > div': {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }),
});

export function LoaderStyle(theme) {
    return useStyles(theme);
}
