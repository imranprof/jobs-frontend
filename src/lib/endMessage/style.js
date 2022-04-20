import {makeStyles} from "@material-ui/core/styles";

import COLORS from "../../../styles/colors";
import FONTS from "../../../styles/fonts";

export const useStyles = makeStyles({
    endMessageWrapper: theme => ({
        width: "100%",
        height: "100%",
        textAlign: "center",
        color: COLORS.gray_4,
        fontSize: 16,
        fontFamily: FONTS.primaryFont,
        marginTop: 20,
        fontStyle: "italic"
    }),
});

export function EndMessageStyle(theme) {
    return useStyles(theme);
}
