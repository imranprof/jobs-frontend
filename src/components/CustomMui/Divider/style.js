import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    divider: theme => ({
            background: theme.palette.customDivider.main,
            margin: "90px 0"
    })
});

export function DividerStyle(theme) {
    return useStyles(theme);
}
