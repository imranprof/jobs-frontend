import {createTheme} from "@material-ui/core/styles";
import COLORS from "./colors";

const darkTheme = createTheme({
    palette: {
        type: "dark",
        background: {
            default: COLORS.dark.backgroundDefault
        },
        primary: {
            main: COLORS.dark.primaryMain
        },
        secondary: {
            main: COLORS.dark.secondaryMain
        },
    },
});

export default darkTheme
