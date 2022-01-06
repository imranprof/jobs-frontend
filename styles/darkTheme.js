import {createTheme} from "@material-ui/core/styles";
import COLORS from "./colors";

const darkTheme = createTheme({
    typography: {
        fontFamily: "'Montserrat', sans-serif"
    },
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
