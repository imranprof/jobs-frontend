import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    divider: theme => ({
            background: theme.palette.customDivider.main,
            marginTop: 90
    })
});

export function DividerStyle(theme) {
    return useStyles(theme);
}
