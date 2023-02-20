import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    profilesWrapper: theme => ({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }),
});

export function ProfilesStyle(theme) {
    return useStyles(theme);
}
